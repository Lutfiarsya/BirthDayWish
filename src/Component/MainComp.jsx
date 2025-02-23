import { useState } from "react"
import axios from "axios"
import Letter from "./Letter"
import cake from '../Assets/cake.png'
import ballon from '../Assets/ballon.png'
import party from '../Assets/party.png'
import hutao from '../Assets/Hutao.png'
import { useMediaQuery } from "react-responsive"
import song from '../Assets/Song.mp3'

const MainComp = () => {
const Mobile = useMediaQuery({ maxWidth: 768})
const [step, setStep] = useState('cardname')
const [opsi, setOpsi] = useState('')
const [nama, setNama] = useState('')
const [wish, setWish] = useState('')
const [message, setMessage] = useState('')



const SendInput = async() => {
    const tokenBotApi = process.env.REACT_APP_TOKEN_BOT;
    const chatIdApi = process.env.REACT_APP_CHAT_ID;
    const telegramApi = `https://api.telegram.org/bot${tokenBotApi}/sendMessage`

    const textMessage = `Nama: ${nama}\nHarapan: ${wish}\nSecretMassage: ${message}`;

    try {
        await axios.post(telegramApi, {
          chat_id: chatIdApi,
          text: textMessage,
        });
        setStep('opsi')
      } catch (error) {
        console.error("Gagal mengirim pesan:", error);
      }
}


const handleClickGift = () => {
    setOpsi('extraGift')

    setTimeout(() => {
        setOpsi('opsi')
    },5000)
}

    return(
        <div className="w-full h-screen flex items-center justify-center">
            {/* Card nama */}
            {step == 'cardname' && (
            <div className="relative p-4 font-['jersey_15'] md:text-3xl text-lg md:w-[700px] w-[350px] h-96 border-8 items-center border-white bg-[--secondary-color] rounded-md text-white" >
                <div className="w-full h-[70%] flex flex-col justify-between">
                <p>Halooooo....,Haloooo....., kayaknya hari ini ada yang ulang tahun nihhh yahhh, tapi aku blm tauu namanyaa siapa yang ulang tahun hari ini, tapi aku cuma tau umurnya tahun ini, kalo gasalah yaa 19 tahun bukan???, kalo gitu aku boleh tau ga namanya yang ulang tahun hari ini????</p>
                <input onChange={(e) => setNama(e.target.value)} className="w-[80%] rounded-md text-lg font-['Poppins'] text-black p-4 md:h-12 h-6"/>
                </div>
                <button className="absolute right-6 bottom-6 md:w-36 md:h-10 h-8 w-20 bg-white text-[--secondary-color] shadow-[4px_4px_0px_3px_var(--fourth-color)] border border-[--fourth-color] transition-all duration-200 active:translate-y-2 active:shadow-[2px_2px_1px_1px_var(--fourth-color)] rounded-md" onClick={() => setStep('wish')}>next</button>
            </div>
            )}
            {/* Wish */}
            {step == 'wish' && (
                <div className="relative p-4 font-['jersey_15'] md:text-3xl text-lg md:w-[700px] w-[350px] h-96 border-8 items-center border-white bg-[--secondary-color] rounded-md text-white" >
                <div className="w-full h-[70%] flex flex-col justify-between">
                <p>Ohhh namanya {nama} tohhh, bagus benget namanyaa, {nama} pasti punya harapan donkk,hmmmm..., semisal kamu ga punya harapan, nahh...harapan si pembuat adalah kamu harus melanjutkan hidup sampe punya harapan yhhh, nah untuk tahun ini harapan kamu apa niihh kalo boleh tau</p>
                <input 
                onChange={(e) => setWish(e.target.value)}
                placeholder="ketik disini yhhh" className="w-[80%] rounded-md text-sm font-['Poppins'] text-black p-4 md:h-12 h-6"/>
                </div>
                <button className="absolute right-6 bottom-6 md:w-36 md:h-10 h-8 w-20 bg-white text-[--secondary-color] shadow-[4px_4px_0px_3px_var(--fourth-color)] border border-[--fourth-color] transition-all duration-200 active:translate-y-2 active:shadow-[2px_2px_1px_1px_var(--fourth-color)] rounded-md" onClick={() => setStep('silentMassage')}>Wish</button>
                </div>
            )}
            {/* Silent Massage */}
            {step == 'silentMassage' && (
                                <div className="relative p-4 font-['jersey_15'] md:text-3xl text-lg md:w-[700px] w-[350px] h-96 border-8 items-center border-white bg-[--secondary-color] rounded-md text-white" >
                                <div className="w-full h-full flex flex-col justify-between">
                                <p>Ishhh, keren banget harapannya, semoga tercapai yaaa, nah terakhir nihhh, kira-kira ada yang mau disampaikan ga nih ke si pembuat tapi kamu malu ngomongnya kalo langsung </p>
                                <input 
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="ketik disini yhhh" className="w-[80%] rounded-md text-lg font-['Poppins'] text-black p-4 md:h-12 h-6"/>
                                <div className="w-full flex flex-row  justify-end items-center">
                                <button className="md:w-36 md:h-10 h-8 w-20 mr-10 bg-white text-[--secondary-color] shadow-[4px_4px_0px_3px_var(--fourth-color)] border border-[--fourth-color] transition-all duration-200 active:translate-y-2 active:shadow-[2px_2px_1px_1px_var(--fourth-color)] rounded-md" onClick={() => setStep('opsi')}>Skip</button>
                                <button className="md:w-36 md:h-10 h-8 w-20 mr-4 bg-white text-[--secondary-color] shadow-[4px_4px_0px_3px_var(--fourth-color)] border border-[--fourth-color] transition-all duration-200 active:translate-y-2 active:shadow-[2px_2px_1px_1px_var(--fourth-color)] rounded-md" onClick={SendInput}>Wish</button>
                                </div>
                                </div>
                                </div>
            )}


            {/* Gift */}
            {step == 'opsi' && (
            <div className="w-full h-full flex flex-col items-center justify-around">
            {opsi == 'letter' && (
                <div className="absolute w-full h-full items-center flex">
                <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50 z-10"></div>
                    <div className="absolute z-10 items-center w-full h-full flex justify-center">
                    <Letter setOpsi={setOpsi}/>
                    </div>
                </div>
            )}

            {opsi == 'extraGift' && (
                <div className="absolute w-full h-full items-center flex">
                <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50 z-10"></div>
                    <div className="absolute z-10 items-center w-full h-full flex justify-center">
                        <div className="bg-[--secondary-color] p-4 flex flex-col items-center justify-center border-8 border-white md:w-[600px] w-[350px] h-84 rounded-md text-2xl font-['jersey_15'] text-white">
                            <div className="w-full h-full flex flex-col justify-center items-center text-center">
                            <img src={hutao} width={200} height={200}/>
                            <p>Nahh extra gift nya coba kamu login genshin dehh, disitu extra gift nya, awkaowk</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="w-full flex items-center justify-center flex-row">
                <h1 
                  style={ Mobile ? {
                    WebkitTextStroke: "1px var(--secondary-color)", // Border 2px hitam
                    WebkitTextFillColor: "white",  // Warna isi teks
                  } : {
                    WebkitTextStroke: "3px var(--secondary-color)", // Border 2px hitam
                    WebkitTextFillColor: "white",  // Warna isi teks
                  }}
                className=" text-white font-['Jersey_15'] text-[45px] md:text-[110px] mt-4 md:mt-0 tracking-widest">Happy Birthday!!!</h1>
            </div>
            <div className="absolute hidden">
                <audio autoPlay controls>
                  <source src={song} type="audio/mpeg"/>
                </audio>
            </div>
            <div className="w-full relative h-full  font-['Jersey_15'] text-center text-2xl flex flex-col items-center justify-center p-4">
                <div className="w-full md:h-full h-[80%] p-4 flex flex-col justify-between items-center">
                <button className="md:w-[40%] w-[80%] h-16 bg-white shadow-[5px_6px_0px_3px_var(--secondary-color)] border border-[--secondary-color] transition-all duration-200 active:translate-y-2 active:shadow-[4px_5px_1px_1px_rgba(255,150,150,0.6)] rounded-md">Memories</button>
                <button onClick={handleClickGift} className="md:w-[40%] w-[80%] h-16 bg-white shadow-[5px_6px_0px_3px_var(--secondary-color)] border border-[--secondary-color] transition-all duration-200 active:translate-y-2 active:shadow-[4px_5px_1px_1px_rgba(255,150,150,0.6)] rounded-md">Extra Gift</button>
                <button onClick={() => setOpsi('letter')} className="md:w-[40%] w-[80%] h-16 bg-white shadow-[5px_6px_0px_3px_var(--secondary-color)] border border-[--secondary-color] transition-all duration-200 active:translate-y-2 active:shadow-[4px_5px_1px_1px_rgba(255,150,150,0.6)] rounded-md">A Letter</button>
                <button className="md:w-[40%] w-[80%] h-16 bg-white shadow-[5px_6px_0px_3px_var(--secondary-color)] border border-[--secondary-color] transition-all duration-200 active:translate-y-2 active:shadow-[4px_5px_1px_1px_rgba(255,150,150,0.6)] rounded-md">Another Wish?</button>
                <button className="md:w-[40%] w-[80%] h-16 bg-white shadow-[5px_6px_0px_3px_var(--secondary-color)] border border-[--secondary-color] transition-all duration-200 active:translate-y-2 active:shadow-[4px_5px_1px_1px_rgba(255,150,150,0.6)] rounded-md">Playlist Spotify</button>
                </div>
                <div className="absolute md:bottom-[50px] md:right-[70px] bottom-2 right-5">
                    <img 
                    src={cake} width={Mobile ? 60 : 120} 
                    height={Mobile ? 60 : 120} className="animate-flipY stroke-cake "/>
                </div>
                <div className="absolute md:bottom-[90px] md:left-[80px] bottom-1 left-4">
                    <img 
                    src={ballon} width={Mobile ? 75 : 120} 
                    height={Mobile ? 75 : 120} className="animate-flipY stroke-ballon "/>
                </div>
                <div className="absolute md:top-0 md:left-[80px] top-0 left-2">
                    <img 
                    src={cake} width={Mobile ? 75 : 120}
                    height={Mobile ? 75 : 120} className="animate-flipY stroke-cake "/>
                </div>
                <div className="absolute md:top-[20px] md:right-[40px] top-0 right-4">
                    <img 
                    src={party} width={Mobile ? 75 : 120}
                    height={Mobile ? 75 : 120} className="animate-flipY stroke-party "/>
                </div>
            </div>
            </div>
            )}
            
        </div>
    )
}

export default MainComp