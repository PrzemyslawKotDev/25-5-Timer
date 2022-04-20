
class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pause: true,
      display: 'Session',
      break: 5,
      minutes: 25,
      activeMinutes: 25,
      seconds: '00'
    };
    this.breakDecrement = this.breakDecrement.bind(this);
    this.breakIncrement = this.breakIncrement.bind(this);
    this.sessionDecrement = this.sessionDecrement.bind(this);
    this.sessionIncrement = this.sessionIncrement.bind(this)
    this.timerReset = this.timerReset.bind(this);
    this.startPause = this.startPause.bind(this);
    this.handleMinutes = this.handleMinutes.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
  } 
  breakDecrement(){
    if(this.state.break > 1 && this.state.break <= 60){
      this.setState({
        pause: this.state.pause,
        display: this.state.display,
        break: this.state.break-1,
        minutes: this.state.minutes,
        activeMinutes: this.state.activeMinutes,
        seconds: this.state.seconds
      })
    } else if(this.state.break === 1){
      this.setState({
        pause: this.state.pause,
        display: this.state.display,
        break: this.state.break,
        minutes: this.state.minutes,
        activeMinutes: this.state.activeMinutes,
        seconds: this.state.seconds
      })
  }
  }
  breakIncrement(){
    if(this.state.break >= 1 && this.state.break < 60){
      this.setState({
        pause: this.state.pause,
        display: this.state.display,
        break: this.state.break+1,
        minutes: this.state.minutes,
        activeMinutes: this.state.activeMinutes,
        seconds: this.state.seconds
      })
    } else if(this.state.break === 60){
      this.setState({
        pause: this.state.pause,
        display: this.state.display,
        break: this.state.break,
        minutes: this.state.minutes,        
        activeMinutes: this.state.activeMinutes,
        seconds: this.state.seconds
      })
    }
  }
  sessionDecrement(){
    if(this.state.activeMinutes > 1 && this.state.activeMinutes <= 10){
      this.setState({
        pause: this.state.pause,
        display: this.state.display,
        break: this.state.break,
        minutes: this.state.minutes-1,
        activeMinutes: '0' + (this.state.activeMinutes-1),
        seconds: this.state.seconds
      })
    }else if(this.state.activeMinutes > 10 && this.state.activeMinutes <= 60){
      this.setState({
        pause: this.state.pause,
        display: this.state.display,
        break: this.state.break,
        minutes: this.state.minutes-1,
        activeMinutes: this.state.activeMinutes-1,
        seconds: this.state.seconds
      })
    }else if(this.state.minutes === 1){
      this.setState({
        pause: this.state.pause,
        display: this.state.display,
        break: this.state.break,
        minutes: this.state.minutes,
        activeMinutes: this.state.activeMinutes,
        seconds: this.state.seconds
      })
    }
  }
  sessionIncrement(){
    if(this.state.activeMinutes >= 1 && this.state.activeMinutes < 10){
      this.setState({
        pause: this.state.pause,
        display: this.state.display,
        break: this.state.break,
        minutes: this.state.activeMinutes+1,
        activeMinutes: '0' + (this.state.activeMinutes+1),
        seconds: this.state.seconds
      })
    } else if(this.state.activeMinutes >= 10 && this.state.activeMinutes < 60){
      this.setState({
        pause: this.state.pause,
        display: this.state.display,
        break: this.state.break,
        minutes: this.state.minutes+1,
        activeMinutes: this.state.activeMinutes+1,
        seconds: this.state.seconds
      })
    } else if(this.state.minutes === 60){
      this.setState({
        pause: this.state.pause,
        display: this.state.display,
        break: this.state.break,
        minutes: this.state.minutes,
        activeMinutes: this.state.activeMinutes,
        seconds: this.state.seconds
      })
    }
  }
  timerReset(){
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
    this.setState({
      pause: true,
      display: 'Session',
      break: 5,
      minutes: 25,
      activeBreak: 5,
      activeMinutes: 25,
      seconds: "00"
    }); for(let i=0; i<10000; i++)
    {
        window.clearInterval(i);
    };
  }
  handleDisplay(){
    if(this.state.display === "Session"){
      if(parseInt(this.state.break) <= 10){
       this.setState({
        pause: this.state.pause,
        display: "Break",
        break: this.state.break,
        minutes: this.state.minutes,
        activeMinutes: '0' + (parseInt(this.state.break)),
        seconds: this.state.seconds
       })}else
      this.setState({
        pause: this.state.pause,
        display: "Break",
        break: this.state.break,
        minutes: this.state.minutes,
        activeMinutes: this.state.break,
        seconds: '00'
       });
    } else if(parseInt(this.state.minutes) <= 10){
       this.setState({
        pause: this.state.pause,
        display: "Session",
        break: this.state.break,
        minutes: this.state.minutes,
        activeMinutes: '0' + (parseInt(this.state.minutes)),
        seconds: this.state.seconds
       })}else
      this.setState({
        pause: this.state.pause,
        display: "Session",
        break: this.state.break,
        minutes: this.state.minutes,
        activeMinutes: this.state.minutes,
        seconds: '00'
       })    
  }
  handleMinutes(){
    if(this.state.activeMinutes > 10){
       this.setState({
        pause: this.state.pause,
        display: this.state.display,
        break: this.state.break,
        minutes: this.state.minutes,
        activeMinutes: this.state.activeMinutes-1,
        seconds: this.state.seconds
       })}else if(parseInt(this.state.activeMinutes) <= 10 && parseInt(this.state.activeMinutes) >= 1){
       this.setState({
        pause: this.state.pause,
        display: this.state.display,
        break: this.state.break,
        minutes: this.state.minutes,
        activeMinutes: '0' + (parseInt(this.state.activeMinutes)-1),
        seconds: this.state.seconds
       })}else if(this.state.activeMinutes === '00'){
       this.setState({
        pause: this.state.pause,
        display: this.state.display,
        break: this.state.break,
        minutes: this.state.minutes,
        activeMinutes: '00',
        seconds: this.state.seconds
       })}
  }
  handleSeconds(){
    if(this.state.seconds >10){
        this.setState({
        pause: this.state.pause,
        display: this.state.display,
        break: this.state.break,
        minutes: this.state.minutes,
        activeMinutes: this.state.activeMinutes,
        seconds: this.state.seconds-1
       })}else
        if(parseInt(this.state.seconds) <= 10 && parseInt(this.state.seconds) >= 1){
        this.setState({
        pause: this.state.pause,
        display: this.state.display,
        break: this.state.break,
        minutes: this.state.minutes,
        activeMinutes: this.state.activeMinutes,
        seconds: "0" + (parseInt(this.state.seconds)-1)
       })}else 
        if(this.state.seconds === "00"){
          if(this.state.activeMinutes === "00"){
            this.handleDisplay(); 
            this.beep();
          }else
        this.handleMinutes();
        this.setState({
        pause: this.state.pause,
        display: this.state.display,
        break: this.state.break,
        minutes: this.state.minutes,
        activeMinutes: this.state.activeMinutes,
        seconds: 59
       });} 
  }
  beep(){
    document.getElementById("beep").play()
  };
  startPause(){     
        if(this.state.pause === false){
          for(let i=0; i<10000; i++)
    {
        window.clearInterval(i);
    };
          this.setState({
        pause: !this.state.pause,
        display: this.state.display,
        break: this.state.break,
        minutes: this.state.minutes,
        activeMinutes: this.state.activeMinutes,
        seconds: this.state.seconds
       })
        }else (this.setState({
        pause: !this.state.pause,
        display: this.state.display,
        break: this.state.break,
        minutes: this.state.minutes,
        activeMinutes: this.state.activeMinutes,
        seconds: this.state.seconds
       }),
         window.setInterval(()=>{ 
         this.handleSeconds();
       }, 1000))
  }
render(){  
  return (
  <>
      <div id="title">Timer</div>
      <div id="setups">
        <div id="break" className="inline-block">
          <div id="break-label">Break Length</div>
          <div id='break-setups'>
          <div id='break-decrement' className="inline-block" onClick={this.breakDecrement}><i class="arrow down"></i></div>
          <div id='break-length' className="inline-block">{this.state.break}</div>
          <div id='break-increment' className="inline-block"  onClick={this.breakIncrement}><i class="arrow up"></i></div>
        </div>
        </div>
        <div id="session" className="inline-block">
          <div id="session-label">Session Length</div>
          <div id='session-setups'>
          <div id='session-decrement' className="inline-block" onClick={this.sessionDecrement}><i class="arrow down"></i></div>
          <div id='session-length' className="inline-block">{this.state.minutes}</div>
          <div id='session-increment' className="inline-block" onClick={this.sessionIncrement}><i class="arrow up"></i></div>
          </div>
        </div>
        <div id="timer">
          <div id='timer-display'>
            <div id='timer-label'>{this.state.display}
        </div>
            <div id='time-left'>{this.state.activeMinutes + ":" + this.state.seconds}</div>
          </div>
          <div id='timer-buttons'>
            <button id="start_stop" onClick={this.startPause}><span className="material-icons md-40">
play_arrow
</span><span id='pause' class="material-icons md-40">
pause
</span></button>
            <button id="reset" onClick={this.timerReset}><span class="material-icons md-36">
restart_alt
</span></button>
          </div>
        </div>
      </div>
      <audio id="beep"><source src="https://freesound.org/data/previews/547/547296_861714-lq.mp3"/></audio>
      <div id='author'>by Przemysław Kot</div>
  </>
  )
}
}
ReactDOM.render(<Clock/>, document.getElementById("clock"))
