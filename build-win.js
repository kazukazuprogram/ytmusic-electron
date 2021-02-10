const builder = require('electron-builder');

builder.build({
    config: {
        'appId': 'com.kazukazuprogram.ytmusicelectron',
        'win': {
            'target': {
                'target': 'portable',
                "icon": "icon.ico",
                'arch': [
                    'x64',
                    'ia32',
                ]
            }
        }
    }
});
