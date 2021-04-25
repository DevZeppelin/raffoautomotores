module.exports = {
    purge: false,
    theme: {
        screens: {
            'md': '850px',
        },
        extend: {
            colors : {
                primary : '#747b81',
                secundary: '#232323',
                lightSilver1: '#a1aab3',
                lightSilver2: '#bcc4cf'
            },
            fontFamily : {
                body : ['Dosis']
            }
        },
    },
    
    variants: {
        borderColor: ["hover", "focus"],
    },
    plugins: []
}