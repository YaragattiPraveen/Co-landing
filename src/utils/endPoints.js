export const root = {
  baseUrl: `http://65.2.167.209:8080/api`,
  imgBaseUrl: "https://colendingdocs.s3.ap-south-1.amazonaws.com",
}

const endPoints = {
  createOrg: '/user/createOrg',
  forgetPass: "/user/forgot",
  // login: '/user/login',
  login: '/admin/login',

  support: "/support/support",


  // admin
  getUserList: "/admin",
  createUser: "/admin/createUser",


  // document/image upload
  doc: "/document", // ?filename=

  // loan related
  fpoList: "/loan/fpoList",
  loan: "/loan"
}

export default endPoints