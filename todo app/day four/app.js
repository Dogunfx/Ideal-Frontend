var todos = [
  {
    task_id: 0,
    task_isCompleted: false,
    task_title: "Read About Reactjs",
    task_date: "2-08-2022",
    task_desc:
      "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, quae assumenda. Ut dolore vel, magni dolorem ab odit minus molestias commodi corrupti, accusantium aspernatur molestiae. Obcaecati cumque consectetur reiciendis magnam!",
  },
  {
    task_id: 2,
    task_isCompleted: false,
    task_title: "Teach JS Coding ",
    task_date: "4/08/2012",
    task_desc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero vel esse ducimus corrupti architecto temporibus dolorum nemo error illum. Ipsa ea cupiditate minus eligendi magni rem quis est voluptatem laborum.",
  },
  {
    task_id: 4,
    task_isCompleted: true,
    task_title: "Victor with doings",
    task_date: "9/03/2001",
    task_desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sint ipsa illum animi harum maiores ea facere itaque, asperiores odit consequatur libero consectetur quod, laboriosam doloribus, minus sequi esse dolore.",
  },
  {
    task_id: 3,
    task_isCompleted: true,
    task_title: "Church Activities",
    task_date: "9/03/2008",
    task_desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sint ipsa illum animi harum maiores ea facere itaque, asperiores odit consequatur libero consectetur quod, laboriosam doloribus, minus sequi esse dolore.",
  },
];

todos.sort(function (a, b) {
  var first = new Date(a.task_date);
  var second = new Date(b.task_date);

  if (second.getTime() > first.getTime()) {
    return 0;
  }
});

console.log(todos);
