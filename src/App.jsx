import React, { useState } from 'react'
import './shaheen-brand.css'
import './index.css'

export default function App(){
  const [isThinking, setIsThinking] = useState(false)
  const [provider, setProvider] = useState('mistral-large-2512')
  const [prompt, setPrompt] = useState('كيف استطيع مساعدتك اليوم؟')

  function handleSend(){
    // Demo: تفعيل الحالة "thinking" لمدة 2.5 ثانية
    setIsThinking(true)
    setTimeout(()=>setIsThinking(false), 2500)
    // في التطبيق الحقيقي: استدعي الـ gateway/api الذي يوجّه إلى مزود AI
  }

  return (
    <div className="container">
      <header className="header">
        <div className="brand-left">
          <div className={`brand-logo-wrapper brand-logo ${isThinking ? 'thinking' : ''}`}>
            {/* Use provided external SHAHEEN images as the main logo */}
            <img src="https://i.postimg.cc/m22gQSbf/SHAHEEN-YS.png" alt="SHAHEEN-YS" className="shaheen-main"/>
            <img src="/termux-icon.svg" alt="" className="termux-icon"/>
            <div className="brand-text">SHAHEEN-YS</div>
          </div>
          <div>
            <div style={{opacity:0.85,fontSize:16,fontWeight:700}}>{provider}</div>
            <div style={{opacity:0.5,fontSize:13}}>الافتراضي</div>
          </div>
        </div>
        <div>
          {/* small avatar using another provided image */}
          <img src="https://i.postimg.cc/sDDgpJVr/SHAHEEN.jpg" alt="user" style={{width:38,height:38,borderRadius:8}}/>
        </div>
      </header>

      <div className="card">
        <div style={{fontSize:15,opacity:0.85,marginBottom:10}}>كيف استطيع مساعدتك اليوم؟</div>
        <textarea value={prompt} onChange={(e)=>setPrompt(e.target.value)} style={{width:'100%',minHeight:80,background:'transparent',border:'none',color:'#fff',outline:'none'}} />
        <div style={{display:'flex',justifyContent:'flex-end',gap:8,marginTop:12}}>
          <button onClick={handleSend} style={{background:'#fff',color:'#000',padding:'10px 14px',borderRadius:10,fontWeight:700}}>إرسال</button>
        </div>
      </div>

      <div className="suggest-list">
        <div style={{marginTop:16,color:'#bbb',fontWeight:700}}>مقترحات</div>
        {['Build API','Improve my prompt','Build AI Agent','Generate project files'].map((t,i)=>(
          <div key={i} className="suggest-item" onClick={()=>{setPrompt(t); handleSend()}}>
            {t}
          </div>
        ))}
      </div>

      <div className="footer"></div>
    </div>
  )
}
