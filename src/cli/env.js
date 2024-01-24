const prefix = "RSS_"

const parseEnv = () => {
    const allEnvs = Object.entries(process.env)
    const neededEnvs = allEnvs.reduce((acc, [key, val]) => {
        if (key.startsWith(prefix)) {
            return [...acc, `${key}=${val}`]
        }
        return acc
    }, [])

    console.log(neededEnvs.join("; "));
};

parseEnv();