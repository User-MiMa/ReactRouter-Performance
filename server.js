import { createServer, Model } from "miragejs"


createServer({
    models: {
        vowels: Model
    },

    seeds(server) {
        server.create("vowel", { id: "1", name: "あ (a)", description: "The hiragana character 'a', derived from the kanji 安 (an). It is the first vowel in the Japanese gojuon ordering.", imageUrl: "/assets/images/aH.png" })
        server.create("vowel", { id: "2", name: "い (i)", description: "The hiragana character 'i', derived from the kanji 以 (i). It is the second vowel in the Japanese gojuon ordering.", imageUrl: "/assets/images/iH.png" })
        server.create("vowel", { id: "3", name: "う (u)", description: "The hiragana character 'u', derived from the kanji 宇 (u). It is the third vowel in the Japanese gojuon ordering.", imageUrl: "/assets/images/uH.png" })
        server.create("vowel", { id: "4", name: "え (e)", description: "The hiragana character 'e', derived from the kanji 衣 (e). It is the fourth vowel in the Japanese gojuon ordering.", imageUrl: "/assets/images/eH.png" })
        server.create("vowel", { id: "5", name: "お (o)", description: "The hiragana character 'o', derived from the kanji 於 (o). It is the fifth vowel in the Japanese gojuon ordering.", imageUrl: "/assets/images/oH.png" })
    },

    routes() {
        this.namespace = "api"
        this.passthrough("https://firestore.googleapis.com/**")
        this.logging = false

        this.get("/vowels", (schema, request) => {
            return schema.vowels.all()
        })

        this.get("/vowels/:id", (schema, request) => {
            const id = request.params.id
            return schema.vowels.find(id)
        })
    }
})