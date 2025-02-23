import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useMediaQuery } from "react-responsive"

const Letter = ({setOpsi}) => {
const [open,setOpen] = useState(false)  
const [phase, setPhase] = useState('amplop')
const [delayedZIndex, setDelayedZIndex] = useState(false);
const Mobile = useMediaQuery({ maxWidth: 768})

useEffect(() => {
    if (open) {
      setTimeout(() => setDelayedZIndex(true), 500); 
    } else {
      setDelayedZIndex(false); 
    }
    
  }, [open]);

const handleClick = () => {
    setOpen(true)
    setTimeout(() => {
        setPhase('surat')
    }, 2000)
}



    return(
        <div className={`w-full h-full flex items-center justify-center`} onClick={handleClick}>
            {open && (<button className="absolute z-10 md:right-4 right-8 top-8 md:top-4 text-3xl md:text-white text-black" onClick={() => setOpsi('opsi')}>X</button>)}
                {phase == 'amplop' && (
                    <div className="w-full h-full relative flex items-center justify-center">
                    {/* Envelope */}
                    <div className={` delay-[1500ms] transition-all  ${open ? 'opacity-0' : ''} flex relative  top-0 w-[50%] h-full`}>
                        {/* KOP */}
                        <div className={`md:w-[500px] md:top-[165px] top-[286px] left-[0px] md:left-[70px] md:h-[300px] w-48 h-12  md:border-l-[250px] border-l-[100px] border-l-transparent md:border-r-[250px] border-r-[100px] border-r-transparent md:border-t-[151px] border-t-[70px] border-t-white absolute transition-transform duration-500 ${open ? "scale-y-[-1] md:translate-y-[-298px] translate-y-[-70px] z-0" : 'z-30 '} ${delayedZIndex ? 'z-0' : 'z-40'}`}></div>
                        <div className={`md:w-[500px] md:top-[165px] top-[285px]  left-[0px] md:left-[70px]  md:h-[300px] w-48 h-12 md:border-l-[250px] border-l-[100px] border-l-transparent md:border-r-[250px] border-r-[100px] border-r-transparent border-t-[70px] md:border-t-[150px] border-t-red-400 absolute transition-transform duration-500  ${open ? "scale-y-[-1] md:translate-y-[-298px] translate-y-[-70px] z-10" : 'z-40 '}  ${delayedZIndex ? 'z-10' : 'z-50'}`}></div>
                        {/* surat */}
                        <div className="w-full h-full flex items-center justify-center m-auto relative">
                            <div className={`relative md:w-[500px] md:h-[300px] w-72 h-24 bg-red-300 flex items-center justify-center`}>
                                <div className={`absolute md:w-[400px] w-36 z-30 bg-white ${open ? "md:translate-y-[-100px] translate-y-[-45px] md:h-[200px] h-24 delay-700" : "md:h-[180px] h-20" } transition-all duration-500 items-center flex`}></div>
                                    <div className="flex flex-row w-full absolute h-full">
                                        <div className="absolute w-full h-full z-40 md:border-t-[300px] border-t-[90px] border-l-[128px] border-t-transparent border-b-[0px] border-b-transparent md:border-l-[500px] border-l-red-400"></div>
                                        <div className="absolute w-full h-full z-30 md:border-t-[300px] border-t-[90px] border-t-transparent border-b-[0px] border-b-transparent md:border-r-[500px] border-r-[200px] border-r-red-400"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            {/* Surat */}
            {phase == 'surat' && (
            <div className="w-full h-full flex items-center justify-center" >
                <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} 
                className="md:w-[500px] md:h-[600px] h-[620px] w-[360px]  bg-white p-4">
                    <div className="relative w-full h-full flex flex-col justify-between">
                        <h2>
                            Dear kijang
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut porro sapiente, repudiandae eum laboriosam enim iste, illum culpa voluptatem mollitia. Assumenda nobis illum facere nesciunt repudiandae magnam eligendi error?</p>
                        <h2 className="right-0">
                            From kuda
                        </h2>
                        </div>
                </motion.div>
            </div>
            )}
        </div>
    )
}

export default Letter