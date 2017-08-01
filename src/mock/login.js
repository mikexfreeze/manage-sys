import {param2Obj, onlyParam2Obj} from 'utils';

const userMap = {
    admin: {
        role: ['admin'],
        token: 'admin',
        introduction: '我是超级管理员',
        avatar: 'https://wdl.wallstreetcn.com/48a3e1e0-ea2c-4a4e-9928-247645e3428b',
        name: '超级管理员小潘',
        uid: '001'
    },
    editor: {
        role: ['editor'],
        token: 'editor',
        introduction: '我是编辑',
        avatar: 'https://wdl.wallstreetcn.com/48a3e1e0-ea2c-4a4e-9928-247645e3428b',
        name: '普通编辑小张',
        uid: '002'

    },
    developer: {
        role: ['develop'],
        token: 'develop',
        introduction: '我是开发',
        avatar: 'https://wdl.wallstreetcn.com/48a3e1e0-ea2c-4a4e-9928-247645e3428b',
        name: '工程师小王',
        uid: '003'
    }
}

const adminInfo = {"id":1,"login":"admin","firstName":"Administrator","lastName":"Administrator","email":"admin@localhost","phone":null,"imageUrl":"","status":"ACTIVATED","langKey":"zh-cn","authorities":["SERVICE_GATEWAY_ADMIN","SERVICE_UAA_ADMIN_CLIENT","ROLE_USER","SERVICE_UAA_ADMIN_USER","ROLE_ADMIN","SERVICE_UAA_ADMIN_ROLE","SERVICE_UAA_ADMIN_AUTHORITY"]}

export default {
    loginByEmail: config => {
        const login = onlyParam2Obj(config.body)
        return userMap[login.username];
        // const {email} = JSON.parse(config.body);
        // return userMap[email.split('@')[0]];
    },
    getInfo: config => {
        return adminInfo
        // const {token} = param2Obj(config.url);
        // if (userMap[token]) {
        //     return userMap[token];
        // } else {
        //     return Promise.reject('a');
        // }
    },
    logout: () => 'success'
};
