export default {
    name: "TrafficMessage",
    props: {
        message: Object
    },
    methods: {
        speak(event) {
            const synth = window.speechSynthesis
            if (synth.speaking) {
                console.error("speechSynthesis.speaking");
                return;
            }
              
            const utterThis = new SpeechSynthesisUtterance(event.target.textContent)
            synth.speak(utterThis);
        }
    },
    template: `
        <div>
            <h2>{{message.title}}</h2>

            <p @click="speak">{{message.description}}</p>
        </div>`
}
