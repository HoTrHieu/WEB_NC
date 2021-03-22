import { CourseTopType } from "../../modules/course/enums/CourseTopType";

export const ApiEndpoint = {
  auth: {
    register: '/api/v1/auth/register',
    login: '/api/v1/auth/login',
    loginGoogle: '/api/v1/auth/login/google',
    refreshAccessToken: '/api/v1/auth/refresh-access-token',
    getProfile: '/api/v1/auth/profile',
    changePassword: '/api/v1/auth/change-password'
  },
  user: {
    search: '/api/v1/user/search',
    add: '/api/v1/user/add',
    checkEmail: '/api/v1/user/check-email',
    checkUsername: '/api/v1/user/check-username',
    updateFirstLastName: '/api/v1/user/update-first-last-name',
    updateRole: (id: number) => `/api/v1/user/update-role/${id}`,
    updateStatus: (id: number) => `/api/v1/user/update-status/${id}`
  },
  category: {
    all: '/api/v1/category/all',
    topOfWeeks: '/api/v1/category/top-of-weeks',
    add: '/api/v1/category/add',
    udpateStatus: (id: number) => `/api/v1/cateogry/update-status`
  },
  course: {
    search: '/api/v1/course/search',
    topOfWeeks: '/api/v1/course/top-of-weeks',
    add: '/api/v1/course/add',
    top: (type: CourseTopType) => `/api/v1/course/top/${type}`,
    getOne: (id: number) => `/api/v1/course/${id}`,
    update: (id: number) => `/api/v1/course/${id}`,
    updateStatus: (id: number) => `/api/v1/course/update-status/${id}`,
    increaseTotalView: (id: number) => `/api/v1/course/increase-total-view/${id}`
  },
  content: {
    add: '/api/v1/content/add',
    update: (id: number) => `/api/v1/content/update/${id}`,
    updateStatus: (id: number) => `/api/v1/content/update-status/${id}`
  },
  uploader: {
    upload: '/api/v1/uploader/upload'
  },
  enrollment: {
    paginate: '/api/v1/enrollment/paginate',
    getDetail: (courseId: number) => `/api/v1/enrollment/${courseId}`,
    enroll: (courseId: number) => `/api/v1/enrollment/enroll/${courseId}`
  },
  review: {
    paginate: '/api/v1/review/paginate',
    add: (courseId: number) => `/api/v1/review/${courseId}`
  },
  studyProcess: {
    update: (id: number) => `/api/v1/study-process/${id}`
  },
  watchList: {
    paginate: '/api/v1/watch-list/paginate',
    updateStatus: (courseId: number) => `/api/v1/watch-list/update-status/${courseId}`
  },
  mailSender: {
    sendOtpMail: '/api/v1/mail-sender/send-otp-mail'
  }
}

export const AuthedApiEndpoints = [
  ApiEndpoint.auth.getProfile,
  ApiEndpoint.auth.refreshAccessToken,
  ApiEndpoint.auth.changePassword,
  ApiEndpoint.user.updateFirstLastName,
  ApiEndpoint.user.search,
  ApiEndpoint.user.updateRole,
  ApiEndpoint.user.updateStatus,
  ApiEndpoint.category.add,
  ApiEndpoint.category.udpateStatus,
  ApiEndpoint.course.add,
  ApiEndpoint.course.update,
  ApiEndpoint.course.updateStatus,
  ApiEndpoint.course.increaseTotalView,
  ApiEndpoint.content.update,
  ApiEndpoint.content.updateStatus,
  ApiEndpoint.uploader.upload,
  ApiEndpoint.enrollment.enroll,
  ApiEndpoint.review.add,
  ApiEndpoint.studyProcess.update,
  ApiEndpoint.watchList.updateStatus
];