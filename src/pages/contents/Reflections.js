import React from "react";

const reflections = [
  {
    date: "May 30, 2025",
    week: 1,
    general:
      "Overall, the online demo teaching showed effort and creativity in keeping students engaged. It's very helpful to call on students by name to make sure they are listening and participating. As an online teacher, always open your camera, check your audio before starting the class, and know how to switch between apps or your powerpoint smoothly. If possible, use two devices, one for presenting and one to monitor your students, so you can see who’s raising their hands and respond better.",
    reflection:
      "This week, I learned how important it is to keep all students involved, not just the ones who are active. What worked well in the presentations was the use of nice and clean PowerPoints that helped explain the lesson. As a class, we need to improve on student engagement and make sure no one feels left out. Future presenters should watch out for students who are raising their hands and try to call on everyone, not just a few. Also, even in online classes, it's important to show energy and enthusiasm to keep the class interested.",
  },
  {
    date: "June 13, 2025",
    week: 2,
    general:
      "Overall, the demo teachers showed great effort and energy, especially in how some students engaged with the class and gave helpful feedback. However, it’s important to make sure that objectives match the topic and include all domains, like the affective domain. Instructions for quizzes or activities should be clearly discussed and also shown on the PowerPoint to avoid confusion. Be mindful of time management activities should be well-balanced and not take too much of the lesson time. Lastly, always check your powerpoint design, use clear fonts, readable colors, and include examples to help students better understand the topic.",
    reflection:
      "This week, I learned how important it is to align all parts of the lesson, especially the objectives, instructions, and activities. What worked well in the presentations was the enthusiasm of some demo teachers and how they engaged with the students through feedback and examples. As a class, we need to improve on time management, making sure activities are balanced and do not take up too much time. Future demo teachers should also check their powerpoint design fonts and colors, it should be clear and easy to read, and directions for tasks like quizzes should be included. Lastly, always make sure that objectives match the topic and try to add real-life examples to make the lesson more relatable.",
  },
  {
    date: "June 20, 2025",
    week: 3,
    general:
      "The presentations were creative and showed effort, but there’s still room to improve. Speak clearly and loud enough so everyone can hear, avoid filler words like “ahm” and “ano,” and keep your slides simple with big text and clear images. Always be present, give clear instructions, and manage your time well. Using real-life examples can also help your classmates relate and understand better. Keep practicing and be confident.",
    reflection:
      "This week, I learned how important clear communication, proper pacing, and presence are when delivering a lesson. What worked well in the presentations was the use of creative energizers and the confidence shown by the demo teachers. As a class, we need to improve on attendance, voice projection, and ensuring that instructions are clearly executed. The next demo teachers should remember to manage their time wisely, especially during the motivation part, and avoid staying too stationary to keep the class engaged. Always check attendance, speak with energy, and be mindful of classroom interaction.",
  },
  {
    date: "June 27, 2025",
    week: 4,
    general:
      "The demo teachers showed effort, and some delivered their lessons very well. However, others need to be more prepared and make sure their instructions are clear and easy to follow. Avoid putting too much text on your powerpoint presentations, and try to include videos or other engaging materials to support your topic. Don’t forget to set classroom rules and always show fairness to all students. With more practice and preparation, everyone can continue to improve.",
    reflection:
      "This week, I learned that being prepared and giving clear instructions are very important in teaching. What worked well in the presentations was the confidence and smooth delivery of some demo teachers, like Mikey and Lenard. As a class, we can improve by adding classroom rules, using less text in powerpoint presentations, and including videos or other materials to keep the lesson interesting. Future presenters should remember to treat all students equally, prepare ahead of time, and explain directions clearly. Also, using simple and neat slides can help the class understand the lesson better.",
  },
  {
    date: "June 4, 2025",
    week: 5,
    general:
      "Overall, the presentations showed good effort and creativity, but there are key areas to improve. Important keywords and concepts should be clearly highlighted or bolded to help the audience focus. Also, always follow the correct sequence of the lesson plan and make sure to review the content before starting the motivation to ensure a smooth and effective flow of the lesson.",
    reflection:
      "This week, I learned the importance of being well-prepared and clear when presenting in front of a class. What worked well in the presentations were the confidence and fluency of some demo teachers, as well as the use of effective strategies and well designed powerpoints presentations. However, as a class, we need to improve in minimizing filler words, ensuring everyone attends and participates, and making sure videos are properly presented and relevant. Future presenters should remember to speak clearly and at a good pace, check their materials beforehand, and give complete instructions. Practicing more and being mindful of visual design can help deliver a better and more professional presentation.",
  },
];

function Reflections() {
  return (
    <div>
      <div
        className="flex-row"
        style={{
          width: "100%",
          justifyContent: "left",
          alignItems: "flex-end",
        }}
      >
        <h2 style={{ color: "gray" }}>- Reflections</h2>
      </div>
      <hr />
      <div className="flex-column">
        {reflections.map((reflection, index) => (
          <div className="topic-siders" key={index}>
            <div className="topic-text">
              <h3>Week {reflection.week}</h3>
              <p>
                <b>Observer Feedback </b> – "{reflection.general}"
              </p>
              <br />
              <p>
                <b>My Reflection: </b>
                <i>"{reflection.reflection}"</i>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reflections;
