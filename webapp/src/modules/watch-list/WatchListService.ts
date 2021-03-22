import { notification } from 'antd';
import { ApiEndpoint } from "../../shared/constants/ApiEndpoint";
import { EntityStatus } from "../../shared/enums/EntityStatus";
import { CrudService } from "../../shared/services/CrudService";
import { NotificationUtils } from '../../shared/utils/NotificationUtils';

export class WatchListService {
  static updateStatus(courseId: number, status: EntityStatus) {
    return CrudService.put(ApiEndpoint.watchList.updateStatus(courseId), { status });
  }

  static async updateStatusWithNotify(courseId: number, status: EntityStatus) {
    try {
      const success = await this.updateStatus(courseId, status);
      const state = status === EntityStatus.ACTIVE ? "Love" : "Un-love";
      if (success) {
        notification.success({
          message: "Success",
          description: `${state} success`,
          style: {
            zIndex: 10
          }
        });
      } else {
        notification.error({
          message: "Error",
          description: `${state} failed, please try again`,
          style: {
            zIndex: 10
          }
        });
      }
      return success;
    } catch (err) {
      console.error(err);
      NotificationUtils.error(err.message);
      return false;
    }
  }
}