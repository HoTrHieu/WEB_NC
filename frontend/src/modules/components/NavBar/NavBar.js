import React from 'react';
import PropTypes from 'prop-types';

const SideBar = props => {
    return (
        <div className="mdk-drawer js-mdk-drawer" id="default-drawer" data-opened onBlur={console.log("nanan")}>
            <div className="mdk-drawer__content" onBlur={console.log('ok')}>
                <div className="sidebar sidebar-dark-dodger-blue sidebar-left" data-perfect-scrollbar onBlur={console.log('okss')}>
                    <div className="d-flex align-items-center navbar-height">
                        <form action="fixed-index.html" className="search-form search-form--black mx-16pt pr-0 pl-16pt">
                            <input type="text" className="form-control pl-0" placeholder="Search" />
                            <button className="btn" type="submit"><i className="material-icons">search</i></button>
                        </form>
                    </div>
                    <a href="fixed-index.html" className="sidebar-brand ">
                        {/* <img class="sidebar-brand-icon" src="assets/images/illustration/student/128/white.svg" alt="Luma"> */}
                        <span className="avatar avatar-xl sidebar-brand-icon h-auto">
                            <span className="avatar-title rounded bg-primary"><img src="assets/images/illustration/student/128/white.svg" className="img-fluid" alt="logo" /></span>
                        </span>
                        <span>Luma</span>
                    </a>
                    <div className="sidebar-heading">Student</div>
                    <ul className="sidebar-menu">
                        <li className="sidebar-menu-item active">
                            <a className="sidebar-menu-button" href="fixed-index.html">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">home</span>
                                <span className="sidebar-menu-text">Home</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="fixed-courses.html">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">local_library</span>
                                <span className="sidebar-menu-text">Browse Courses</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="fixed-paths.html">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">style</span>
                                <span className="sidebar-menu-text">Browse Paths</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="fixed-student-dashboard.html">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">account_box</span>
                                <span className="sidebar-menu-text">Student Dashboard</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="fixed-student-my-courses.html">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">search</span>
                                <span className="sidebar-menu-text">My Courses</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="fixed-student-paths.html">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">timeline</span>
                                <span className="sidebar-menu-text">My Paths</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="fixed-student-path.html">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">change_history</span>
                                <span className="sidebar-menu-text">Path Details</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="fixed-student-course.html">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">face</span>
                                <span className="sidebar-menu-text">Course Preview</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="fixed-student-lesson.html">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">panorama_fish_eye</span>
                                <span className="sidebar-menu-text">Lesson Preview</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="fixed-student-take-course.html">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">class</span>
                                <span className="sidebar-menu-text">Take Course</span>
                                <span className="sidebar-menu-badge badge badge-accent badge-notifications ml-auto">PRO</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="fixed-student-take-lesson.html">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">import_contacts</span>
                                <span className="sidebar-menu-text">Take Lesson</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="fixed-student-take-quiz.html">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">dvr</span>
                                <span className="sidebar-menu-text">Take Quiz</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="fixed-student-quiz-results.html">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">poll</span>
                                <span className="sidebar-menu-text">My Quizzes</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="fixed-student-quiz-result-details.html">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">live_help</span>
                                <span className="sidebar-menu-text">Quiz Result</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="fixed-student-path-assessment.html">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">layers</span>
                                <span className="sidebar-menu-text">Skill Assessment</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="fixed-student-path-assessment-result.html">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">assignment_turned_in</span>
                                <span className="sidebar-menu-text">Skill Result</span>
                            </a>
                        </li>
                    </ul>
                    <div className="sidebar-heading">Instructor</div>
                    <ul className="sidebar-menu">
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="fixed-instructor-dashboard.html">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">school</span>
                                <span className="sidebar-menu-text">Instructor Dashboard</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="fixed-instructor-courses.html">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">import_contacts</span>
                                <span className="sidebar-menu-text">Manage Courses</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="fixed-instructor-quizzes.html">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">help</span>
                                <span className="sidebar-menu-text">Manage Quizzes</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="fixed-instructor-earnings.html">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">trending_up</span>
                                <span className="sidebar-menu-text">Earnings</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="fixed-instructor-statement.html">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">receipt</span>
                                <span className="sidebar-menu-text">Statement</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="fixed-instructor-edit-course.html">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">post_add</span>
                                <span className="sidebar-menu-text">Edit Course</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="fixed-instructor-edit-quiz.html">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">format_shapes</span>
                                <span className="sidebar-menu-text">Edit Quiz</span>
                            </a>
                        </li>
                    </ul>
                    <div className="sidebar-heading">Applications</div>
                    <ul className="sidebar-menu">
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button js-sidebar-collapse" data-toggle="collapse" href="#enterprise_menu">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">donut_large</span>
                                Enterprise
                    <span className="ml-auto sidebar-menu-toggle-icon" />
                            </a>
                            <ul className="sidebar-submenu collapse sm-indent" id="enterprise_menu">
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-erp-dashboard.html">
                                        <span className="sidebar-menu-text">ERP Dashboard</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-crm-dashboard.html">
                                        <span className="sidebar-menu-text">CRM Dashboard</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-hr-dashboard.html">
                                        <span className="sidebar-menu-text">HR Dashboard</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-employees.html">
                                        <span className="sidebar-menu-text">Employees</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-staff.html">
                                        <span className="sidebar-menu-text">Staff</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-leaves.html">
                                        <span className="sidebar-menu-text">Leaves</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button disabled" href="fixed-departments.html">
                                        <span className="sidebar-menu-text">Departments</span>
                                    </a>
                                </li>
                                {/* <li class="sidebar-menu-item">
        <a class="sidebar-menu-button disabled" href="fixed-documents.html">
            <span class="sidebar-menu-text">Documents</span>
        </a>
        </li>
        <li class="sidebar-menu-item">
        <a class="sidebar-menu-button disabled" href="fixed-attendance.html">
            <span class="sidebar-menu-text">Attendance</span>
        </a>
        </li>
        <li class="sidebar-menu-item">
        <a class="sidebar-menu-button disabled" href="fixed-recruitment.html">
            <span class="sidebar-menu-text">Recruitment</span>
        </a>
        </li>
        <li class="sidebar-menu-item">
        <a class="sidebar-menu-button disabled" href="fixed-payroll.html">
            <span class="sidebar-menu-text">Payroll</span>
        </a>
        </li>
        <li class="sidebar-menu-item">
        <a class="sidebar-menu-button disabled" href="fixed-training.html">
            <span class="sidebar-menu-text">Training</span>
        </a>
        </li>
        <li class="sidebar-menu-item">
        <a class="sidebar-menu-button disabled" href="fixed-employee-profile.html">
            <span class="sidebar-menu-text">Employee Profile</span>
        </a>
        </li>
        <li class="sidebar-menu-item">
        <a class="sidebar-menu-button disabled" href="fixed-accounting.html">
            <span class="sidebar-menu-text">Accounting</span>
        </a>
        </li>
        <li class="sidebar-menu-item">
        <a class="sidebar-menu-button disabled" href="fixed-inventory.html">
            <span class="sidebar-menu-text">Inventory</span>
        </a>
        </li> */}
                            </ul>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" data-toggle="collapse" href="#productivity_menu">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">access_time</span>
                                Productivity
                    <span className="ml-auto sidebar-menu-toggle-icon" />
                            </a>
                            <ul className="sidebar-submenu collapse sm-indent" id="productivity_menu">
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-projects.html">
                                        <span className="sidebar-menu-text">Projects</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-tasks-board.html">
                                        <span className="sidebar-menu-text">Tasks Board</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-tasks-list.html">
                                        <span className="sidebar-menu-text">Tasks List</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button disabled" href="fixed-kanban.html">
                                        <span className="sidebar-menu-text">Kanban</span>
                                    </a>
                                </li>
                                {/* <li class="sidebar-menu-item">
        <a class="sidebar-menu-button disabled" href="fixed-task-details.html">
            <span class="sidebar-menu-text">Task Details</span>
        </a>
        </li>
        <li class="sidebar-menu-item">
        <a class="sidebar-menu-button disabled" href="fixed-team-members.html">
            <span class="sidebar-menu-text">Team Members</span>
        </a>
        </li> */}
                            </ul>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" data-toggle="collapse" href="#ecommerce_menu">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">shopping_cart</span>
                                eCommerce
                    <span className="ml-auto sidebar-menu-toggle-icon" />
                            </a>
                            <ul className="sidebar-submenu collapse sm-indent" id="ecommerce_menu">
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-ecommerce.html">
                                        <span className="sidebar-menu-text">Shop Dashboard</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button disabled" href="fixed-edit-product.html">
                                        <span className="sidebar-menu-text">Edit Product</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" data-toggle="collapse" href="#messaging_menu">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">message</span>
                                Messaging
                    <span className="sidebar-menu-badge badge badge-accent badge-notifications ml-auto">2</span>
                                <span className="sidebar-menu-toggle-icon" />
                            </a>
                            <ul className="sidebar-submenu collapse sm-indent" id="messaging_menu">
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-messages.html">
                                        <span className="sidebar-menu-text">Messages</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-email.html">
                                        <span className="sidebar-menu-text">Email</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" data-toggle="collapse" href="#cms_menu">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">content_copy</span>
                                CMS
                    <span className="ml-auto sidebar-menu-toggle-icon" />
                            </a>
                            <ul className="sidebar-submenu collapse sm-indent" id="cms_menu">
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-cms-dashboard.html">
                                        <span className="sidebar-menu-text">CMS Dashboard</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-posts.html">
                                        <span className="sidebar-menu-text">Posts</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" data-toggle="collapse" href="#account_menu">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">account_box</span>
                                Account
                    <span className="ml-auto sidebar-menu-toggle-icon" />
                            </a>
                            <ul className="sidebar-submenu collapse sm-indent" id="account_menu">
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-pricing.html">
                                        <span className="sidebar-menu-text">Pricing</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-login.html">
                                        <span className="sidebar-menu-text">Login</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-signup.html">
                                        <span className="sidebar-menu-text">Signup</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-signup-payment.html">
                                        <span className="sidebar-menu-text">Payment</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-reset-password.html">
                                        <span className="sidebar-menu-text">Reset Password</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-change-password.html">
                                        <span className="sidebar-menu-text">Change Password</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-edit-account.html">
                                        <span className="sidebar-menu-text">Edit Account</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-edit-account-profile.html">
                                        <span className="sidebar-menu-text">Profile &amp; Privacy</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-edit-account-notifications.html">
                                        <span className="sidebar-menu-text">Email Notifications</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-edit-account-password.html">
                                        <span className="sidebar-menu-text">Account Password</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-billing.html">
                                        <span className="sidebar-menu-text">Subscription</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-billing-upgrade.html">
                                        <span className="sidebar-menu-text">Upgrade Account</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-billing-payment.html">
                                        <span className="sidebar-menu-text">Payment Information</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-billing-history.html">
                                        <span className="sidebar-menu-text">Payment History</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-billing-invoice.html">
                                        <span className="sidebar-menu-text">Invoice</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" data-toggle="collapse" href="#community_menu">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">people_outline</span>
                                Community
                    <span className="ml-auto sidebar-menu-toggle-icon" />
                            </a>
                            <ul className="sidebar-submenu collapse sm-indent" id="community_menu">
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-teachers.html">
                                        <span className="sidebar-menu-text">Browse Teachers</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-student-profile.html">
                                        <span className="sidebar-menu-text">Student Profile</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-teacher-profile.html">
                                        <span className="sidebar-menu-text">Teacher Profile</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-blog.html">
                                        <span className="sidebar-menu-text">Blog</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-blog-post.html">
                                        <span className="sidebar-menu-text">Blog Post</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-faq.html">
                                        <span className="sidebar-menu-text">FAQ</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-help-center.html">
                                        {/*  */}
                                        <span className="sidebar-menu-text">Help Center</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-discussions.html">
                                        <span className="sidebar-menu-text">Discussions</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-discussion.html">
                                        <span className="sidebar-menu-text">Discussion Details</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-discussions-ask.html">
                                        <span className="sidebar-menu-text">Ask Question</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="sidebar-heading">UI</div>
                    <ul className="sidebar-menu">
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" data-toggle="collapse" href="#components_menu">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">tune</span>
                                Components
                    <span className="ml-auto sidebar-menu-toggle-icon" />
                            </a>
                            <ul className="sidebar-submenu collapse sm-indent" id="components_menu">
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-ui-buttons.html">
                                        <span className="sidebar-menu-text">Buttons</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-ui-avatars.html">
                                        <span className="sidebar-menu-text">Avatars</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-ui-forms.html">
                                        <span className="sidebar-menu-text">Forms</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-ui-loaders.html">
                                        <span className="sidebar-menu-text">Loaders</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-ui-tables.html">
                                        <span className="sidebar-menu-text">Tables</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-ui-cards.html">
                                        <span className="sidebar-menu-text">Cards</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-ui-icons.html">
                                        <span className="sidebar-menu-text">Icons</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-ui-tabs.html">
                                        <span className="sidebar-menu-text">Tabs</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-ui-alerts.html">
                                        <span className="sidebar-menu-text">Alerts</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-ui-badges.html">
                                        <span className="sidebar-menu-text">Badges</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-ui-progress.html">
                                        <span className="sidebar-menu-text">Progress</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-ui-pagination.html">
                                        <span className="sidebar-menu-text">Pagination</span>
                                    </a>
                                </li>
                                {/* <li class="sidebar-menu-item">
        <a class="sidebar-menu-button disabled" href="fixed-ui-typography.html">
            <span class="sidebar-menu-text">Typography</span>
        </a>
        </li>
        <li class="sidebar-menu-item">
        <a class="sidebar-menu-button disabled" href="fixed-ui-colors.html">
            <span class="sidebar-menu-text">Colors</span>
        </a>
        </li>
        <li class="sidebar-menu-item">
        <a class="sidebar-menu-button disabled" href="fixed-ui-breadcrumb.html">
            <span class="sidebar-menu-text">Breadcrumb</span>
        </a>
        </li>
        <li class="sidebar-menu-item">
        <a class="sidebar-menu-button disabled" href="fixed-ui-accordions.html">
            <span class="sidebar-menu-text">Accordions</span>
        </a>
        </li>
        <li class="sidebar-menu-item">
        <a class="sidebar-menu-button disabled" href="fixed-ui-modals.html">
            <span class="sidebar-menu-text">Modals</span>
        </a>
        </li>
        <li class="sidebar-menu-item">
        <a class="sidebar-menu-button disabled" href="fixed-ui-chips.html">
            <span class="sidebar-menu-text">Chips</span>
        </a>
        </li> */}
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button disabled" href="!#">
                                        <span className="sidebar-menu-text">Disabled</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" data-toggle="collapse" href="#plugins_menu">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">folder</span>
                                Plugins
                    <span className="ml-auto sidebar-menu-toggle-icon" />
                            </a>
                            <ul className="sidebar-submenu collapse sm-indent" id="plugins_menu">
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-ui-plugin-charts.html">
                                        <span className="sidebar-menu-text">Charts</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-ui-plugin-flatpickr.html">
                                        <span className="sidebar-menu-text">Flatpickr</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-ui-plugin-daterangepicker.html">
                                        <span className="sidebar-menu-text">Date Range Picker</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-ui-plugin-dragula.html">
                                        <span className="sidebar-menu-text">Dragula</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-ui-plugin-dropzone.html">
                                        <span className="sidebar-menu-text">Dropzone</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-ui-plugin-range-sliders.html">
                                        <span className="sidebar-menu-text">Range Sliders</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-ui-plugin-quill.html">
                                        <span className="sidebar-menu-text">Quill</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-ui-plugin-select2.html">
                                        <span className="sidebar-menu-text">Select2</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-ui-plugin-nestable.html">
                                        <span className="sidebar-menu-text">Nestable</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-ui-plugin-fancytree.html">
                                        <span className="sidebar-menu-text">Fancy Tree</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-ui-plugin-maps-vector.html">
                                        <span className="sidebar-menu-text">Vector Maps</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-ui-plugin-sweet-alert.html">
                                        <span className="sidebar-menu-text">Sweet Alert</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="fixed-ui-plugin-toastr.html">
                                        <span className="sidebar-menu-text">Toastr</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button disabled" href="!#">
                                        <span className="sidebar-menu-text">Disabled</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" data-toggle="collapse" href="#layouts_menu">
                                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">view_compact</span>
                                Layouts
                    <span className="ml-auto sidebar-menu-toggle-icon" />
                            </a>
                            <ul className="sidebar-submenu collapse sm-indent" id="layouts_menu">
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="compact-index.html">
                                        <span className="sidebar-menu-text">Compact</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="mini-index.html">
                                        <span className="sidebar-menu-text">Mini</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="mini-secondary-index.html">
                                        <span className="sidebar-menu-text">Mini + Secondary</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="index.html">
                                        <span className="sidebar-menu-text">App</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="boxed-index.html">
                                        <span className="sidebar-menu-text">Boxed</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item">
                                    <a className="sidebar-menu-button" href="sticky-index.html">
                                        <span className="sidebar-menu-text">Sticky</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu-item active">
                                    <a className="sidebar-menu-button" href="fixed-index.html">
                                        <span className="sidebar-menu-text">Fixed</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

SideBar.propTypes = {

};

export default SideBar;