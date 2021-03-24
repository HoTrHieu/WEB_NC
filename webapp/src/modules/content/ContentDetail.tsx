import React, { useEffect, useRef, useState } from "react";
import { IContent } from "../../shared/entities/IContent";
import { ASSETS_URL } from "../../shared/constants/constants";
import { Divider } from "antd";
import { StudyProcessService } from "../study-process/StudyProcessService";
import { IStudyProcess } from "../../shared/entities/IStudyProcess";
const { Player } = require("video-react");

interface IContentDetailProps {
  courseId: number;
  content: IContent;
  studyProcess: IStudyProcess
}

export function ContentDetail(props: IContentDetailProps) {
  const { studyProcess } = props;
  const [play, setPlay] = useState(false);
  const playerRef = useRef<any>();
  const lastStateRef = useRef<any>();
  const contentId = props.content.id;
  const courseId = props.courseId;

  useEffect(() => {
    let unsubscribe: any;
    if (play) {
      console.log(playerRef);
      unsubscribe = playerRef.current.subscribeToStateChange((state: any) => {
        lastStateRef.current = state;
        if (state.ended && !(studyProcess && studyProcess.done)) {
          StudyProcessService.update(
            courseId,
            contentId,
            Math.floor(state.duration)
          );
        }
      });
    }
    return () => {
      if (play) {
        if (lastStateRef.current && lastStateRef.current.currentTime > 0) {
          StudyProcessService.update(
            courseId,
            contentId,
            Math.floor(lastStateRef.current.currentTime)
          );
        }
        unsubscribe();
      }
    };
  }, [play, courseId, contentId, studyProcess]);

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: props.content.description }}
      ></div>
      <Divider />
      {play ? (
        <Player
          autoPlay
          startTime={studyProcess?.duration || 0}
          ref={(ref: any) => (playerRef.current = ref)}
          src={`${ASSETS_URL}/${props.content.videoPath}`}
        />
      ) : (
        <div className="mt-2">
          <span
            className="cursor-pointer text-blue-400 hover:underline"
            onClick={() => setPlay(true)}
          >
            &bull; View content video
          </span>
        </div>
      )}
    </div>
  );
}
