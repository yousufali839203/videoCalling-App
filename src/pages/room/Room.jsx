import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


export default function Room() {
    const { roomId } = useParams();

    // myMeeting Function
    const myMeeting = async (element) => {
        const appID = 1534300999;
        const serverSecret = "f49f5a0c93b145291a82a96b66c2c58e";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            "Enter your name"
        );

        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [{
                name: 'Copy Link',
                url: `http://localhost:5173/room/${roomId}`
            }],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall
            },
            showScreenSharingButton: true
        })

    }
    return (
        <div>
            <div ref={myMeeting} />
        </div>
    )
}