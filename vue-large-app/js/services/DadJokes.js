const DadJokes = {
    async random() {
        const resp = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'Yrgo Java Enterprise Utvecklare (www.yrgo.se)'
            }
        })

        if (!resp.ok) {
            throw new Error(resp.statusText)
        }

        const data = await resp.json()
        return data?.joke
    }
}

Object.freeze(DadJokes)

export default DadJokes
