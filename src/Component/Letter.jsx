import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Letter = ({ setOpsi }) => {
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState("amplop");
  const [delayedZIndex, setDelayedZIndex] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    if (open) {
      setTimeout(() => setDelayedZIndex(true), 500);
    } else {
      setDelayedZIndex(false);
    }
  }, [open]);

  const handleClick = () => {
    setOpen(true);
    setTimeout(() => {
      setPhase("surat");
    }, 2000);
  };

  return (
    <div className="w-full h-full flex items-center justify-center" onClick={handleClick}>
      {open && (
        <button
          className="absolute z-10 md:right-4 right-8 top-8 md:top-4 text-3xl md:text-white text-black"
          onClick={() => setOpsi("opsi")}
        >
          X
        </button>
      )}
      {phase === "amplop" && (
        <>
        <div className="relative flex items-center justify-center w-[250px] h-[150px] md:w-[450px] md:h-[250px]">
          {/* Bagian bawah amplop */}
          <div className="w-full h-full bg-red-400 relative z-10" />
          {/* Segitiga atas (penutup amplop) */}
             <div className={`absolute top-0 left-0 w-0 h-0 border-l-[125px] md:border-l-[225px] border-r-[125px] md:border-r-[225px] border-t-[80px] md:border-t-[125px] border-l-transparent border-r-transparent border-t-red-500 transition-transform duration-500 ${open ? "scale-y-[-1] translate-y-[-80px] md:translate-y-[-125px] z-10" : "z-40"} ${delayedZIndex ? "z-0" : "z-40"}`}/>
             <div className={`absolute w-[60%] h-full bg-white z-20 delay-[1000ms] ${open ? "translate-y-[-50px] z-10" : "z-30"} transform duration-500 transition-all `} />
             <div className={`absolute bottom-0 z-40 right-0 w-0 h-0 md:border-l-[450px] border-l-[250px] border-l-transparent md:border-b-[250px] border-b-[150px] border-b-red-300 border-r-0`}/>
             <div className={`absolute bottom-0 z-40 right-0 w-0 h-0 md:border-r-[450px] border-r-[250px] border-r-transparent md:border-b-[250px] border-b-[150px] border-b-red-200 border-r-0`}/>
             <div className={`absolute bottom-0 left-0 w-0 h-0 border-l-[125px] md:border-l-[225px] border-r-[125px] md:border-r-[225px] border-b-[80px] md:border-b-[125px] border-l-transparent border-r-transparent border-b-red-100 transition-transform z-40 duration-500`}/>
        </div>
        <button className="text-white font-semibold font-['Jersey_15'] text-2xl absolute z-40 bottom-5 tracking-widest">Click Here</button>
        </>

      )}
      {phase === "surat" && (
        <div className="w-full h-full flex items-center font-['Fira_Sans'] justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-[500px] md:h-[600px] h-[620px] w-[360px] bg-white p-4 shadow-lg"
          >
            <div className="relative w-full h-full flex flex-col justify-between">
              <h2>To: Marsah</h2>
              <p className="text-xs">
                  First of all, Happy Birthday yhhh, wish u all the best!!!, asik nambah umur nih, maaf yh cuma bisa kasih ini doank, 
                  semisal suatu saat asing gitu wkwkw, stiap pertemuan kan pasti ada perpisahan dong, website ini bakalan ada tiap kamu ultah
                  nnti ku setting deh tiap ganti tahun baru ke lock lagi.
                  <br/>
                  <br/>
                  Makasih dh bertahan sampe sekarang yhhh, if u need something or just someone to talk, u can text me if u want.
                  oiya itu welkinnya cuma sampe 1 bulan kalo gasalah, manfaatin dh ya, login aja abis itu logout juga gpp, kan lumayan 90 primo tiap hari
                  trus apalagi ya, kurangin cik makan-makan ga sehatnya sama jam tidur nya dibenerin, ga bagus star girl tidur diatas jam 12 malam sama kurangin
                  toxicnya ga bagus tau, boleehh kok toxic tpi kalo kamu udah deket bnget aja dan tau batasannya, Okeii tidak??.
                  <br/>
                  <br/>
                  Makasih juga dh mau jdi temen coop guah, 4 tahun ga mabar game sama siapapun agak berubah aja, sorry if i kinda weird
                  yaa maklumin cik, nolep gini gada temen wkwk. Jangan lupa cik hu tao nya di build itu, kasian hutao gw
                  duhh gabisa word of affirmation lgi gw, nanti klo nyari pasangan jangan liat fisiknya aja, banyak kok yang baik, tapi sayangnya aja
                  ga pernah beruntung kisah cintanya - kek gw akwaok.
                  <br/>
                  <br/>
                  Proud of u sa, belajarnya ditingkatin lagi yahh, klo gagal jangan malu ato sedih, smua psti pernah gagal, tpi hrus bangkit lagi.
                  Okeii tidak???. jngan gampang minder kurangin iri sama orang lain, di kehidupan kamu yaa pemeran utamanya itu kamu bukan orang lain.
                  <br/>
                  <br/>
                  Dah keknya sgitu aja deh, semoga tahun ini diberi kelancaran dan kebahagiaan ya cik, tetap lah menjadi pribadi yang lebihh baik lagi, okee sah???
                  See yaa!!

              </p>
              <h2 className="right-0">Mirai</h2>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Letter;
