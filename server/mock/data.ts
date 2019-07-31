function mockF(): string {
    return '222'
}

export let list = {
    'list|1-10': [
        {
            'id|+1': 1,
            name: '鸿基梦'
        }
    ],
    func: mockF,
    reg: /[a-z][A-Z][0-9]/,
    code: 0,
    msg: '请求成功'
}

