'use client';
import React, { useRef, useState } from 'react'
import './onboarding.scss'
import { BRANDNAME } from '../../constants/namingconstants';

const Onboarding = () => {
  const [job, setJob] = useState<string>('')
  const [role, setRole] = useState<string>('')
  const [uses, setUses] = useState<string>('')
  const [awareness, setAwareness] = useState<string>('')
  const [completed, setCompleted] = useState<boolean>(false)

  const onboarding = useRef<any>()

  const [stage1, setStage1] = useState<boolean>(false)
  const [stage2, setStage2] = useState<boolean>(false)
  const [stage3, setStage3] = useState<boolean>(false)
  const [stage4, setStage4] = useState<boolean>(false)
  const stage01Page = useRef<any>()
  const stage02Page = useRef<any>()
  const stage03Page = useRef<any>()
  const stage04Page = useRef<any>()


  const [current, setCurrent] = useState<number>(1)

  const handleScroll = () => {
    if(onboarding.current) {
      const { scrollTop, offsetHeight } = onboarding.current;
      const index = Math.round(scrollTop / offsetHeight);
      setCurrent(index)
      console.log(index)
    }
  }

  // first stage 
  const stage01FirstSelect = useRef<any>()
  const stage01SecondSelect = useRef<any>()
  const validateStage1 = () => {
    console.log(stage01FirstSelect.current.value)
    if(stage01FirstSelect.current.value && stage01SecondSelect.current.value) {
      setJob(stage01FirstSelect.current.value)
      setRole(stage01SecondSelect.current.value)
      setStage1(true)
      setTimeout(() => {
        stage02Page.current?.scrollIntoView({
          behavior: 'smooth'
        })
      }, 100)
    }
    else {
      setStage1(false)
    }
    
  }

  // second stage 
  const [stage2Select, setStage2Select] = useState<string>('')
  const confirmSecondStageSelect = (element: any) => {
    document.querySelectorAll('.stage-2-select').forEach((el) => {
      el.classList.remove('stage-2-selected')
    })
    element.classList.add('stage-2-selected')
    const secondStageValue = element.getAttribute('id')
    console.log(secondStageValue)
    if(secondStageValue) {
      setUses(secondStageValue)
      setStage2(true)
      setTimeout(() => {
        stage03Page.current?.scrollIntoView({
          behavior: 'smooth'
        })
      }, 100)
    }
    else{
      setStage2(false)
    }
  }

  // third stage 
  const [stage3Select, setStage3Select] = useState<string>('')
  const stage03FirstSelect = useRef<any>()

  const validateStage3 = () => {
    console.log(stage03FirstSelect.current.value)
    if(stage03FirstSelect.current.value) {
      setAwareness(stage03FirstSelect.current.value)
      setStage3(true)
      setTimeout(() => {
        stage04Page.current?.scrollIntoView({
          behavior: 'smooth'
        })
      }, 100)
    }
    else {
      setStage3(false)
    }
    
  }

  // forth stage 
  const [stage4Select, setStage4Select] = useState<string>('')
  const confirmForthStageSelect = (element: any) => {
    console.log(element)
    document.querySelectorAll('.stage-4-select').forEach((el) => {
      el.classList.remove('stage-4-selected')
    })
    element.classList.add('stage-4-selected')
    const forthStageValue: string = element.getAttribute('id')
    console.log(forthStageValue)
    if(forthStageValue) {
      validateAllValues(forthStageValue)
      setTimeout(() => {
        setStage4(true)
        // stage03Page.current?.scrollIntoView({
        //   behavior: 'smooth'
        // })
      }, 300)
    }
    else{
      setStage4(false)
    }
  }


    const validateAllValues = (prefered_learning_pattern: string) => {
      if(job && role && uses && awareness && prefered_learning_pattern) {

        const allValues = {
          job,
          role,
          uses,
          awareness,
          prefered_learning_pattern
        }
        console.log(allValues)
        setCompleted(true)
      }
    }



  return (
    <div ref={onboarding} className="onboarding" onScroll={handleScroll}>

      <main ref={stage01Page} className="main d-flex align-items-center justify-content-center">
        <div className="context-container">
          <div className='welcome-msg'>Welcome <b>Emmanuel</b>!</div>
          <h2 className='know-more'>We'd love to know a bit more about you...</h2>
          <h2 className='work'>What kind of work do you do?</h2>
          <div className="select-container w-100 form-input">

            <select ref={stage01FirstSelect} onChange={validateStage1} className="select w-100 form-select-lg">
              <option value="Education" >Education</option>
              <option value="User Research">User Research</option>
              <option value="Agency / Consulting">Agency / Consulting</option>
              <option value="Business Operations">Business Operations</option>
              <option value="UI / UX Design">UI / UX Design</option>
              <option value="Project Management">Project Management</option>
              <option value="Engineering">Engineering</option>
              <option value="Sales">Sales</option>
              <option value="Software Development">Software Development</option>
            </select>
          </div>
          <h2 className='work'>What's your role?</h2>

          <div className="select-container w-100 form-input">
            <select ref={stage01SecondSelect} onChange={validateStage1} className="select w-100 form-select-lg">
              <option value="" >Select Role</option>
              <option value="Student" >Student</option>
              <option value="Team Manager" >Team Manager</option>
              <option value="Consultant">Consultant</option>
              <option value="Teacher">Teacher</option>
              <option value="Contractor / Freelancer">Contractor / Freelancer</option>
              <option value="Founder / C-Level">Founder / C-Level</option>
              <option value="Individual Contributor">Individual Contributor</option>
              <option value="Director">Director</option>
            </select>
          </div>
        </div>
      </main>
      
      {stage1 && <main ref={stage02Page} className="main d-flex align-items-center justify-content-center">
        <div className="context-container">
          <div className='welcome-msg mb-0'>As a <b>{role}</b> in <b>{job}</b>,</div>
          <h2 className='know-more'>what are you planning to use {BRANDNAME} for?</h2>

          <div className="btns-container row w-100 mx-auto">
            <div className="col-6 d-flex align-items-center justify-content-center ps-0">
              <button id='work' className={`stage-2-select btn border w-100 h-100`} onClick={(e: any) => {confirmSecondStageSelect(e.target)}}>
                Work
              </button>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-center pe-0">
              <button id='personal' className={`stage-2-select btn border w-100 h-100`} onClick={(e: any) => {confirmSecondStageSelect(e.target)}}>
                Personal
              </button>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-center ps-0">
              <button id='community' className={`stage-2-select btn border w-100 h-100`} onClick={(e: any) => {confirmSecondStageSelect(e.target);}}>
                Community Building
              </button>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-center pe-0">
              <button id='education' className={`stage-2-select btn border w-100 h-100`} onClick={(e: any) => {confirmSecondStageSelect(e.target)}}>
                Education
              </button>
            </div>
          </div>
        </div>
      </main>}
      
      {stage2 && stage1 && <main ref={stage03Page} className="main d-flex align-items-center justify-content-center">
        <div className="context-container">
          <div className='welcome-msg'>That's great!</div>
          <h2 className='know-more mb-2'>How did you hear about {BRANDNAME}?</h2>
          <div className="select-container w-100 form-input">

            <select ref={stage03FirstSelect} onChange={validateStage3} className="select w-100 form-select-lg">
              <option value="friendOrCollegue" >From a collegue / friend</option>
              <option value="education">User Research</option>
              <option value="education">Agency / Consulting</option>
              <option value="education">Business Operations</option>
              <option value="education">UI / UX Design</option>
              <option value="education">Project Management</option>
              <option value="education">Engineering</option>
              <option value="education">Sales</option>
              <option value="education">Software Development</option>
              <option value="education">Other</option>
            </select>
          </div>

        </div>
      </main>}
      
      {stage3 && stage2 && stage1 && <main ref={stage04Page} className="main d-flex align-items-center justify-content-center">
        <div className="context-container">
          {/* <div className='welcome-msg mb-0'>As a <b>Founder / C-Level</b> in <b>Software development</b>,</div> */}
          <h2 className='know-more'>How do you prefere to learn?</h2>

          <div className="btns-container row w-100 mx-auto">
            <div className="col-6 d-flex align-items-center justify-content-center ps-0">
              <button id='videos' className="stage-4-select btn border w-100 h-100" onClick={(e: any) => {confirmForthStageSelect(e.target)}}>
                Videos
              </button>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-center pe-0">
              <button id='articles' className="stage-4-select btn border w-100 h-100" onClick={(e: any) => {confirmForthStageSelect(e.target)}}>
                Articles
              </button>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-center ps-0">
              <button id='interactive_contents' className="stage-4-select btn border w-100 h-100" onClick={(e: any) => {confirmForthStageSelect(e.target)}}>
                Interactive Contents
              </button>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-center pe-0">
              <button id='group_duscussion' className="stage-4-select btn border w-100 h-100" onClick={(e: any) => {confirmForthStageSelect(e.target)}}>
                Group Duscussion
              </button>
            </div>
          </div>
        </div>
      </main>}

      <div className="progress-flow-container mx-auto d-flex align-items-center justify-content-center">
        <div className="row align-items-center justify-content-center">

          <div className="px-1 col-3">
            <div className={`${stage1 && current >= 1 && 'active'} progress-bar`}></div>
          </div>

          <div className="px-1 col-3">
            <div className={`${stage2 && current >= 2 && 'active'} progress-bar`}></div>
          </div>

          <div className="px-1 col-3">
            <div className={`${stage3 && current >= 3 && 'active'} progress-bar`}></div>
          </div>

          <div className="px-1 col-3">
            <div className={`${stage4 && completed && 'active'} progress-bar`}></div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Onboarding