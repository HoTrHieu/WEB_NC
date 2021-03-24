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
    all: '/api/v1/user/all',
    search: '/api/v1/user/search',
    add: '/api/v1/user',
    checkEmail: '/api/v1/user/check-email',
    checkUsername: '/api/v1/user/check-username',
    updateEmail: '/api/v1/user/update-email',
    updateFirstLastName: '/api/v1/user/update-first-last-name',
    updateTeacherProfile: '/api/v1/user/update-teacher-profile',
    updateRole: (id: number) => `/api/v1/user/update-role/${id}`,
    updateStatus: (id: number) => `/api/v1/user/update-status/${id}`,
  },
  category: {
    all: '/api/v1/category/all',
    search: '/api/v1/category/search',
    topOfWeeks: '/api/v1/category/top-of-weeks',
    add: '/api/v1/category',
    checkName: '/api/v1/category/check-name',
    findOne: (id: number) => `/api/v1/category/${id}`,
    update: (id: number) => `/api/v1/category/${id}`,
    udpateStatus: (id: number) => `/api/v1/category/update-status/${id}`
  },
  course: {
    search: '/api/v1/course/search',
    topOfWeeks: '/api/v1/course/top-of-weeks',
    add: '/api/v1/course',
    top: (type: CourseTopType) => `/api/v1/course/top/${type}`,
    getDetail: (id: number) => `/api/v1/course/detail/${id}`,
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
    getDetail: (courseId: number) => `/api/v1/enrollment/${courseId}`,
    enroll: (courseId: number) => `/api/v1/enrollment/enroll/${courseId}`
  },
  review: {
    paginate: (courseId: number) => `/api/v1/review/paginate/${courseId}`,
    add: (courseId: number) => `/api/v1/review/${courseId}`
  },
  studyProcess: {
    findOne: (courseId: number) => `/api/v1/study-process/find-one/${courseId}`,
    findByCourseId: (courseId: number) => `/api/v1/study-process/find-by-course-id/${courseId}`,
    update: (courseId: number) => `/api/v1/study-process/${courseId}`
  },
  watchList: {
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
  ApiEndpoint.user.updateEmail,
  ApiEndpoint.user.updateFirstLastName,
  ApiEndpoint.user.search,
  ApiEndpoint.user.updateRole,
  ApiEndpoint.user.updateStatus,
  ApiEndpoint.category.add,
  ApiEndpoint.category.update,
  ApiEndpoint.category.udpateStatus,
  ApiEndpoint.course.add,
  ApiEndpoint.course.update,
  ApiEndpoint.course.updateStatus,
  ApiEndpoint.course.increaseTotalView,
  ApiEndpoint.content.update,
  ApiEndpoint.content.updateStatus,
  ApiEndpoint.uploader.upload,
  ApiEndpoint.enrollment.getDetail,
  ApiEndpoint.enrollment.enroll,
  ApiEndpoint.review.add,
  ApiEndpoint.studyProcess.findOne,
  ApiEndpoint.studyProcess.findByCourseId,
  ApiEndpoint.studyProcess.update,
  ApiEndpoint.watchList.updateStatus,
];