// In nodeJS we have some built-in module
// OS module
// FS
// Path
const os = require('os');
// in4 about user

const user = os.userInfo();
console.log(user);

// return system uptime in second

console.log("the system uptime: "+os.uptime());

const currentOS = {
    name: os.type(),
    release:os.release(),
    freeMem: os.freemem()
};

console.log(currentOS);
// {
//     uid: -1,
//     gid: -1,
//     username: 'HP',
//     homedir: 'C:\\Users\\HP',
//     shell: null
//   }
//   the system uptime: 8299
//   { name: 'Windows_NT', release: '10.0.22000', freeMem: 1405366272 }
