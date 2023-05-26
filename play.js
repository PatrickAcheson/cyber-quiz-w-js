///Patrick Acheson

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answersButtonsElement = document.getElementById('answer-buttons')
const ScoreElement = document.getElementById('score')

let shuffledQuestions, currentQuestionIndex

let score = -1

window.onload=function() {
    shuffledQuestions = question.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    loadnextQuestion()
  }


function loadnextQuestion() {
    resetState()
    showQuestions(shuffledQuestions[currentQuestionIndex])
}

function showQuestions(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        ScoreElement.innerText = score
        button.classList.add('btn-answer')
        if (answer.correct) {
            button.dataset.correct = answer.correct
            score = score + 1
        }
        button.addEventListener('click', selectAnswer)
        answersButtonsElement.appendChild(button)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        localStorage.setItem('newScore', score);
    } else {
        newScore = score
        location.href = '/cyber-quiz-w-js/complete.html';
    }
}

function resetState() {
    clearStatusClass(document.body)
    while (answersButtonsElement.firstChild) {
        answersButtonsElement.removeChild(answersButtonsElement.firstChild)
    }
}

function selectAnswer(ele) {
    const selectedButton = ele.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answersButtonsElement.children), forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

function startNextQueston() {
    currentQuestionIndex ++
    setTimeout(function() { loadnextQuestion(); }, 750);
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
        startNextQueston()
    } else {
        element.classList.add('wrong')
        score = score - 1
        startNextQueston()
    }    
}

function clearStatusClass(element) {
    element.classList.remove("correct") 
    element.classList.remove('wrong')
}

const question = [
    {
        question: 'What is the most secure wireless encryption method?',
        answers: [
            {text: 'WPA2 with AES', correct: true},
            {text: 'WPA2 with TKIP', correct: false},
            {text: 'WEP', correct: false},
            {text: 'WPA', correct: false},
        ]
    },
    {
        question: 'How many bits is a IPv6 address?',
        answers: [
            {text: '48', correct: false},
            {text: '16', correct: false},
            {text: '64', correct: false},
            {text: '128', correct: true},
        ]
    },
    {
        question: 'What is the common link-local for IPv6 interface?',
        answers: [
            {text: 'FDEE::/7', correct: false},
            {text: 'FE80::/10', correct: true},
            {text: 'FF00::/8', correct: false},
            {text: 'FEC0::/10', correct: false},
        ]
    },
    {
        question: 'What are the UDP associated Protocals?',
        answers: [
            {text: 'FTP', correct: false},
            {text: 'DHCP', correct: true},
            {text: 'HTTP', correct: false},
            {text: 'SMPT', correct: false},
        ]
    },
    {
        question: 'A network needs 26 devices, what subnet?',
        answers: [
            {text: '255.255.255.224', correct: true},
            {text: '255.255.255.192', correct: false},
            {text: '255.255.255.240', correct: false},
            {text: '255.255.255.128', correct: false},
        ]
    },
    {
        question: 'Top layer TCP/IP protocals?',
        answers: [
            {text: 'IP', correct: false},
            {text: 'TCP', correct: false},
            {text: 'POP3', correct: true},
            {text: 'Ethernet', correct: false},
        ]
    },
    {
        question: 'Responsibilities of the Ethernet MAC sublayer?',
        answers: [
            {text: 'logical addressing', correct: false},
            {text: 'data encapsulation', correct: true},
            {text: 'error detection', correct: false},
            {text: 'frame delimiting', correct: false},
        ]
    },
    {
        question: 'What protcol makes use of A, NS, AAAA, and MX?',
        answers: [
            {text: 'DNS', correct: true},
            {text: 'SMTP', correct: false},
            {text: 'POP', correct: false},
            {text: 'MAC', correct: false},
        ]
    },
    {
        question: 'What type of switching drops FCS failed frames?',
        answers: [
            {text: 'store-and-forward', correct: true},
            {text: 'borderless', correct: false},
            {text: 'ingress port', correct: false},
            {text: 'cut-through', correct: false},
        ]
    },
    {
        question: 'When a printer is being shared, what network type is suggested?',
        answers: [
            {text: 'point-to-point', correct: false},
            {text: 'client-based', correct: false},
            {text: 'master-slave', correct: false},
            {text: 'peer-to-peer', correct: true},
        ]
    },
    {
        question: 'What protocal builds a MAC table?',
        answers: [
            {text: 'DHCP', correct: false},
            {text: 'ICMP', correct: false},
            {text: 'ARP', correct: true},
            {text: 'DNS', correct: false},
        ]
    },
    {
        question: 'A packet has a destination port of 53, what protocol is this?',
        answers: [
            {text: 'ICMP', correct: false},
            {text: 'DNS', correct: true},
            {text: 'Telnet', correct: false},
            {text: 'SSH', correct: false},
        ]
    },
    {
        question: 'What manages contention-based traffic on a wireless network?',
        answers: [
            {text: 'token passing', correct: false},
            {text: 'CSMA/CD', correct: false},
            {text: 'priority ordering', correct: false},
            {text: 'CSMA/CA', correct: true},
        ]
    },
    {
        question: 'What IPv4 header field is decreased each hop?',
        answers: [
            {text: 'version', correct: false},
            {text: 'fragment offset', correct: false},
            {text: 'time-to-live', correct: true},
            {text: 'priority ordering', correct: false},
        ]
    },
    {
        question: 'Which wireless technology has low-power, and is common in IoT?',
        answers: [
            {text: 'bluetooth', correct: false},
            {text: 'wiMAX', correct: false},
            {text: 'zigbee', correct: true},
            {text: 'Wi-Fi', correct: false},
        ]
    },
    {
        question: 'A packet has a destination port number of 21. What service is the client requesting?',
        answers: [
            {text: 'DHCP', correct: false},
            {text: 'DNS', correct: false},
            {text: 'SSH', correct: false},
            {text: 'FTP', correct: true},
        ]
    },
    {
        question: 'A disgruntled employee is scanning the network, what type of hack is this?',
        answers: [
            {text: 'access', correct: false},
            {text: 'malware', correct: false},
            {text: 'reconnaissance', correct: true},
            {text: 'gaining access', correct: false},
        ]
    },
    {
        question: 'A new LAN needs to 4 supported devices what subnet is suggested?',
        answers: [
            {text: '255.255.255.192', correct: false},
            {text: '255.255.255.248', correct: true},
            {text: '255.255.255.240', correct: false},
            {text: '255.255.255.224', correct: false},
        ]
    },
    {
        question: 'An individual who hacks ethically is refered to as?',
        answers: [
            {text: 'white hat', correct: true},
            {text: 'grey hat', correct: false},
            {text: 'black hat', correct: false},
            {text: 'green hat', correct: false},
        ]
    },
    {
        question: 'What is the first stage of a typical pen-testing framework?',
        answers: [
            {text: 'intelligence gathering', correct: true},
            {text: 'threat modeling', correct: false},
            {text: 'reporting', correct: false},
            {text: 'vulnerability analysis', correct: false},
        ]
    },
    {
        question: 'What is a MitM attack?',
        answers: [
            {text: 'malware in the main-frame', correct: false},
            {text: 'mic inclusion technology mitigation', correct: false},
            {text: 'man in the middle', correct: true},
            {text: 'max in the mac', correct: false},
        ]
    },
    {
        question: 'What flag is sent to terminate a TCP connection?',
        answers: [
            {text: 'ACK', correct: false},
            {text: 'SYN', correct: false},
            {text: 'FIN', correct: true},
            {text: 'RST', correct: false},
        ]
    },
    {
        question: 'How many bits are a IPv4 address?',
        answers: [
            {text: '48', correct: false},
            {text: '128', correct: false},
            {text: '64', correct: false},
            {text: '32', correct: true},
        ]
    },
    {
        question: 'How many bits are a MAC address?',
        answers: [
            {text: '48', correct: true},
            {text: '128', correct: false},
            {text: '64', correct: false},
            {text: '32', correct: false},
        ]
    },
    {
        question: 'What flag is sent to initiate a TCP connection?',
        answers: [
            {text: 'ACK', correct: false},
            {text: 'SYN', correct: true},
            {text: 'FIN', correct: false},
            {text: 'RST', correct: false},
        ]
    },
    {
        question: 'What is the data unit used in OSI application layer?',
        answers: [
            {text: 'data', correct: true},
            {text: 'segment', correct: false},
            {text: 'bit', correct: false},
            {text: 'frame', correct: false},
        ]
    },
    {
        question: 'What is the data unit used in OSI model physical layer?',
        answers: [
            {text: 'data', correct: false},
            {text: 'segment', correct: false},
            {text: 'bit', correct: true},
            {text: 'frame', correct: false},
        ]
    },
    {
        question: 'What is the data unit used in OSI model data-link layer?',
        answers: [
            {text: 'data', correct: false},
            {text: 'segment', correct: false},
            {text: 'bit', correct: false},
            {text: 'frame', correct: true},
        ]
    },
    {
        question: 'What is the data unit used in OSI model transport layer?',
        answers: [
            {text: 'data', correct: false},
            {text: 'segment', correct: true},
            {text: 'bit', correct: false},
            {text: 'frame', correct: false},
        ]
    },
    {
        question: 'What is the data unit used in OSI model network layer?',
        answers: [
            {text: 'data', correct: false},
            {text: 'packet', correct: true},
            {text: 'bit', correct: false},
            {text: 'frame', correct: false},
        ]
    },
    {
        question: 'What protocol is found at layer 4 in the OSI model?',
        answers: [
            {text: 'WLAN', correct: false},
            {text: 'IP', correct: false},
            {text: 'DHCP', correct: false},
            {text: 'UDP', correct: true},
        ]
    },
    {
        question: 'What protocol is found at layer 7 in the OSI model?',
        answers: [
            {text: 'IPv4', correct: false},
            {text: 'DNS', correct: true},
            {text: 'ARP', correct: false},
            {text: 'UDP', correct: false},
        ]
    },
    {
        question: 'What protocol is found at layer 3 in the OSI model?',
        answers: [
            {text: 'IPv6', correct: true},
            {text: 'DNS', correct: false},
            {text: 'TCP', correct: false},
            {text: 'UDP', correct: false},
        ]
    },
    {
        question: 'What is the top level of a DNS hierarchy called?',
        answers: [
            {text: 'second level domain', correct: false},
            {text: 'top level domain', correct: false},
            {text: 'root domain', correct: true},
            {text: 'subdomain', correct: false},
        ]
    },
    {
        question: 'To achieve network reliablity what is NOT needed?',
        answers: [
            {text: 'security', correct: false},
            {text: 'scalability', correct: false},
            {text: 'quality of service', correct:false},
            {text: 'customer support', correct: true},
        ]
    },
    {
        question: 'What is NOT a bandwidth terminology?',
        answers: [
            {text: 'latency', correct: false},
            {text: 'throughput', correct: false},
            {text: 'goodput', correct: false},
            {text: 'overthrough', correct:true},
        ]
    },
    {
        question: 'What is stage 1 of a pen-test?',
        answers: [
            {text: 'exploitation', correct: false},
            {text: 'gaining access', correct: false},
            {text: 'reconnaissance', correct: true},
            {text: 'scanning', correct: false},
        ]
    },
    {
        question: 'What is stage 2 of a pen-test?',
        answers: [
            {text: 'exploitation', correct: false},
            {text: 'gaining access', correct: false},
            {text: 'reconnaissance', correct: false},
            {text: 'scanning', correct: true},
        ]
    },
    {
        question: 'What is stage 3 of a pen-test?',
        answers: [
            {text: 'exploitation', correct: false},
            {text: 'gaining access', correct: true},
            {text: 'reconnaissance', correct: false},
            {text: 'scanning', correct: false},
        ]
    },
    {
        question: 'What is stage 4 of a pen-test?',
        answers: [
            {text: 'maintaining access', correct: true},
            {text: 'gaining access', correct: false},
            {text: 'scanning', correct: false},
            {text: 'exploitation', correct: false},
        ]
    },
    {
        question: 'What is the 5th stage of a pen-test?',
        answers: [
            {text: 'scanning', correct: false},
            {text: 'gaining access', correct: false},
            {text: 'maintaining access', correct: false},
            {text: 'covering tracks', correct: true},
        ]
    },
    {
        question: 'What does ACL stand for?',
        answers: [
            {text: 'access condition list', correct: false},
            {text: 'anti-control list', correct: false},
            {text: 'access control logs', correct: false},
            {text: 'access control list', correct: true},
        ]
    },
    {
        question: 'When a packet does not meet a ACL criteria it is?',
        answers: [
            {text: 'resent', correct: false},
            {text: 'dropped', correct: true},
            {text: 'destroyed', correct: false},
            {text: 'ACK send', correct: false},
        ]
    },
    {
        question: 'How many HOSTS per subnet in a /18 network?',
        answers: [
            {text: '4,096', correct: false},
            {text: '16,384', correct: true},
            {text: '32,768', correct: false},
            {text: '16,382', correct: false},
        ]
    },
    {
        question: 'What protocal is connection-less?',
        answers: [
            {text: 'FTP', correct: false},
            {text: 'TCP', correct: false},
            {text: 'IP', correct: true},
            {text: 'HTTPS', correct: false},
        ]
    },
    {
        question: 'Name the 1st stage of the forensic investigation process',
        answers: [
            {text: 'identifcation', correct: false},
            {text: 'evaluation', correct: false},
            {text: 'acquisition', correct: true},
            {text: 'presentation', correct: false},
        ]
    },
    {
        question: 'Name the 2nd stage of the forensic investigation process',
        answers: [
            {text: 'identifcation', correct: true},
            {text: 'evaluation', correct: false},
            {text: 'presentation', correct: false},
            {text: 'covering tracks', correct: false},
        ]
    },
    {
        question: 'Name the 3rd stage of the forensic investigation process',
        answers: [
            {text: 'analysis', correct: false},
            {text: 'evaluation', correct: true},
            {text: 'presentation', correct: false},
            {text: 'reporting', correct: false},
        ]
    },
    {
        question: 'Name the 4th stage of the forensic investigation process',
        answers: [
            {text: 'reconnisance', correct: false},
            {text: 'locating', correct: false},
            {text: 'presentation', correct: true},
            {text: 'evaluation', correct: false},
        ]
    },
    {
        question: 'What does ACPO stand for in forensics terminology',
        answers: [
            {text: 'association of chief police officers', correct: true},
            {text: 'association of criminal police organisations', correct: false},
            {text: 'analysis of connected potential offenders', correct: false},
            {text: 'acquisition of Object-oriented programming', correct: false},
        ]
    },
    {
        question: 'What does NOT describe chain of custody',
        answers: [
            {text: 'how the evidence was collected', correct: false},
            {text: 'where the evidence was stored', correct: false},
            {text: 'who might be the lead suspect', correct: true},
            {text: 'who has had access to the evidence', correct: false},
        ]
    },
]
