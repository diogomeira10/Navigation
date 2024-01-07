import Accordion from '../Components/Accordion';

function AccordionPage() {

  const items = [
    {
      id: 'l2kj5',
      label: "Can I use React on a project?",
      content:"You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want."
    },
    {
      id: 'sadfasf598',
      label: "Can I use Javascript on a project?",
      content:"You can use Javascript on any project you want.You can use Javascript on any project you want.You can use Javascript on any project you want.You can use Javascript on any project you want.You can use React on any project you want."
    },
    {
      id: 'sadjg42',
      label: "Can I use CSS on a project?",
      content:"You can use CSS on any project you want.You can use CSS on any project you want.You can use React on any project you want.You can use CSS on any project you want.You can use CSS on any project you want."
    }
  ]


  return <Accordion items={items} />;
}

export default AccordionPage;