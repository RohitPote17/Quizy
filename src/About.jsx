import React from 'react'

function About() {
  return (
    <div>
      <div className="about w-full h-[180vh] flex items-center justify-center  bg-black text-white relative">
        <div className="abt-sec w-[75vw] top-[50%] absolute">
          <h1 className="font-extrabold text-[3rem]">About Us</h1>
          <p className="font-extrabold leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            doloribus nesciunt dolores incidunt, obcaecati dolor inventore illo,
            earum reiciendis velit illum sunt minus ducimus delectus animi
            consectetur laboriosam temporibus dicta necessitatibus ut vero? Quia
            fugiat dolorum tempora adipisci enim eveniet assumenda, architecto
            eligendi inventore quae. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Velit non corporis assumenda nemo, eaque modi?
            Quisquam magni, cumque impedit nobis perferendis accusamus? Nihil
            optio totam maxime iure quaerat corrupti modi?
          </p>
          <div className="my-img w-[40vw] h-[40vh] bg-slate-500 rounded-md"></div>
          <button className="bg-green-700 p-3 font-extrabold rounded-md text-white mt-2">
            Know More
          </button>
      </div>
      </div>
    </div>
  )
}

export default About
