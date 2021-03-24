import { Button, ButtonProps, notification } from "antd";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { NotificationUtils } from "../../shared/utils/NotificationUtils";
import { MailSenderService } from "../mail-sender/MailSenderService";
import { IAddUserRequest } from "../user/types/AddUserRequest";

const sendOtpWaitTimes = [0, 30, 300, 600, 1800];

export function useOtpSender() {
  const [sendOtpCount, setSendOtpCount] = useState(0);
  const [sendOtpWaitTime, setSendOtpWaitTime] = useState(0);
  const intervalRef = useRef<any>();

  const sendOtp = useCallback(
    async (user: IAddUserRequest) => {
      try {
        await MailSenderService.sendOtp(user.firstName, user.email);
        setSendOtpCount(sendOtpCount + 1);
        notification.success({
          message: "Success",
          description: (
            <>
              An e-mail with OTP is sent for <b>{user.email}</b>, please check
              it
            </>
          ),
        });
      } catch (err) {
        console.error(err);
        NotificationUtils.error(err.message);
      }
    },
    [sendOtpCount]
  );

  const removeInterval = useCallback(() => {
    if (!!intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    removeInterval();

    let totalWaitTime =
      sendOtpWaitTimes[Math.min(sendOtpCount, sendOtpWaitTimes.length - 1)];
    setSendOtpWaitTime(totalWaitTime);
    intervalRef.current = setInterval(() => {
      if (--totalWaitTime === 0) {
        removeInterval();
      }
      setSendOtpWaitTime(totalWaitTime);
    }, 1000);

    return removeInterval;
  }, [sendOtpCount, removeInterval]);

  const SendOtpButton = memo((props: ButtonProps) => (
      <Button
        type="primary"
        shape="round"
        loading={sendOtpWaitTime > 0}
        {...props}
      >
        {sendOtpWaitTime > 0
          ? `Please wait for ${sendOtpWaitTime} (s)...`
          : "Re-send OTP"}
      </Button>
  ));

  return useMemo(
    () => ({
      sendOtp,
      removeInterval,
      SendOtpButton,
    }),
    [SendOtpButton, removeInterval, sendOtp]
  );
}
