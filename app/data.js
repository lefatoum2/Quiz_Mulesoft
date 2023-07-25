export const quiz = {
    totalQuestions: 8,
    questions: [
      {
        id: 1,
        question: 'What is Anypoint Design Center?',
        answers: ['Anypoint Design Center is a platform building a connector between two computer systems',
        'Anypoint Design Center designs and builds APIs and integrations at lightning speed, all in one product',
        'Anypoint Design Center is a cloud for building a SOAP API',
        'Anypoint Design Center is an severless integration tool'
      ],
        correctAnswer: 'Anypoint Design Center designs and builds APIs and integrations at lightning speed, all in one product'
      },
      {
        id: 2,
        question: 'What for is Anypoint Exchange?',
        answers: ['A tool for send a mail.','s a curated catalog of reusable assets.','A currency converter','The marketplace for computer systems'],
        correctAnswer: 's a curated catalog of reusable assets.',
      },

      	/* MuleSoft API Designer */

      {
        id: 3,
        question: 'What Is an API Specification?',
        answers: ["A contract that is easily digestible by both humans and computer systems.","A contract that is easily digestible by only computer systems.",
        "A contract that is easily digestible by only computer systems.","A contract between an API and humans"],
        correctAnswer: "A contract that is easily digestible by both humans and computer systems.",
      },
      {
        id: 4,
        question: 'What is The Problem with Systems and Data Integration?',
        answers:     ["A russian service for testing API specification","The mocking service is only meant for testing and not for production use","A service for for sending a alert mail","A service for for sending a alert mail"]
        ,
        correctAnswer: "A russian service for testing API specification",
      },
      {
        id: 5,
        question: 'What is Mulesoft Composer?',
        answers: ["An integration tool designed for Geeks","An integration tool designed by Barbara","An integration tool that builds a system computer","An integration tool designed for SaaS admins, business analysts, marketers, salespeople, and team leaders"]
        ,
        correctAnswer: "An integration tool designed for SaaS admins, business analysts, marketers, salespeople, and team leaders",
      },
      {
        id: 6,
        question: "Which following feature isn't a Mule Composer's feature?",
        answers: ["Map extracted data from one system to another","Synchronize data across different systems","Mulesoft Composer isn't developing and releasing new connectors","Extract data from connected systems based on a specific event or schedule"]
        ,
        correctAnswer: "Mulesoft Composer isn't developing and releasing new connectors",
      },
      {
        id: 7,
        question: "Which following component isn't  MuleSoft Composer's component ?",
        answers: ["Case","For Each block","Action","Trigger"],
        correctAnswer: "Case",
      },
      {
        id: 8,
        question:  "Give me the order of flow creation tasks",
        answers: ["Design,Plan and test,Activate,Monitor and troubleshoot,Deactivate","Plan,Design and test,Activate,Monitor and troubleshoot,Deactivate","Plan,Design and test,Activate,Deactivate,Monitor and troubleshoot","Activate,Plan,Design and test,Monitor and troubleshoot,Deactivate"]
        ,
        correctAnswer: "Plan,Design and test,Activate,Monitor and troubleshoot,Deactivate",
      }
    ],
  };
  