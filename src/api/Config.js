// export const RootPath = 'http://setc-server.herokuapp.com/api' //production
export const RootPath = 'http://localhost:5000/api'
export const Headers = {
  headers: {
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE",
      // 'Access-Control-Allow-Headers': "X-Requested-With, Content-Type, Authorization",
      "Content-Type": "application/json",
      "Accept": "application/json",
      'Authorization': `Bearer ${localStorage.getItem('user')}`
  }
};