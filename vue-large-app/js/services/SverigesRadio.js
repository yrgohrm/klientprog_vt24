export default {
    baseUrl: "https://api.sr.se/api/v2",

    async getAllTrafficAreas() {
        const resp = await fetch(`${this.baseUrl}/traffic/areas?format=json&size=100`)
        if (!resp.ok) {
            throw new Error(resp.statusText)
        }

        const data = await resp.json()
        return data?.areas ?? []
    },

    async getTrafficArea(latitude, longitude) {
        const resp = await fetch(`${this.baseUrl}/traffic/areas?latitude=${latitude}&longitude=${longitude}&format=json`)
        if (!resp.ok) {
            throw new Error(resp.statusText)
        }

        const data = await resp.json()
        return data?.area?.name ?? "Göteborg"
    },

    async getMessages(area) {
        const resp = await fetch(`${this.baseUrl}/traffic/messages?trafficareaname=${area}&format=json`)
        if (!resp.ok) {
            throw new Error(resp.statusText)
        }

        const data = await resp.json()
        return data?.messages ?? []
    }
}
