import { CheckCircleOutlined, LockOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import React, { useCallback, useMemo } from "react";
import { IContent } from "../../shared/entities/IContent";
import { IStudyProcess } from "../../shared/entities/IStudyProcess";
import { useQuery } from "../../shared/hooks/useQuery.hook";
import { FormatUtils } from "../../shared/utils/FormatUtils";
import { StudyProcessService } from "../study-process/StudyProcessService";
import { ContentDetail } from "./ContentDetail";

interface IContentListProps {
  courseId: number;
  contents: IContent[];
  isEnrolled?: boolean;
}

export function ContentList(props: IContentListProps) {
  const { contents, courseId } = props;
  const fetchStudyProcesses = useCallback(() => {
    return StudyProcessService.findByCourseId(courseId);
  }, [courseId]);

  const studyProcessResponse = useQuery(fetchStudyProcesses);
  const studyProcessMap = useMemo(() => {
    if (studyProcessResponse.data) {
      return studyProcessResponse.data.reduce((map: any, sp: IStudyProcess) => {
        map[sp.contentId] = sp;
        return map;
      }, {});
    }
    return {};
  }, [studyProcessResponse.data]);

  return (
    <Collapse>
      {contents
        .sort((a, b) => a.order - b.order)
        .map((content) => {
          const studyProcess = studyProcessMap[content.id];
          const isDone = !!studyProcess?.done;
          const isBlock = !content.preview && !props.isEnrolled;
          return (
            <Collapse.Panel
              className={isDone ? "bg-green-300" : ""}
              collapsible={isBlock ? "disabled" : "header"}
              header={
                <div className="flex items-center">
                  <div>
                    [{FormatUtils.formatSeconds(studyProcess?.duration || 0)} /{" "}
                    {FormatUtils.formatSeconds(content.duration)}]{" "}
                    {content.title}
                  </div>
                  {isBlock && (
                    <div className="ml-auto">
                      <LockOutlined />
                    </div>
                  )}
                  {isDone && (
                    <div className="ml-auto">
                      <CheckCircleOutlined />
                    </div>
                  )}
                </div>
              }
              key={content.id}
            >
              <ContentDetail
                studyProcess={studyProcess}
                courseId={props.courseId}
                content={content}
              />
            </Collapse.Panel>
          );
        })}
    </Collapse>
  );
}
