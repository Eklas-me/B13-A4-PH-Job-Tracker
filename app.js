let jobsData = [
    {
        id: 1,
        companyName: "CloudFirst Inc",
        position: "Backend Developer",
        location: "Seattle, WA",
        type: "Full-time",
        salary: "$140,000 - $190,000",
        description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
        status: "all"
    },
    {
        id: 2,
        companyName: "Innovation Labs",
        position: "UI/UX Engineer",
        location: "Austin, TX",
        type: "Full-time",
        salary: "$110,000 - $150,000",
        description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
        status: "all"
    },
    {
        id: 3,
        companyName: "MegaCorp Solutions",
        position: "JavaScript Developer",
        location: "New York, NY",
        type: "Full-time",
        salary: "$130,000 - $170,00",
        description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
        status: "all"
    },
    {
        id: 4,
        companyName: "StartupXYZ",
        position: "Full Stack Engineer",
        location: "Remote",
        type: "Full-time",
        salary: "$120,000 - $160,000",
        description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
        status: "all"
    },
    {
        id: 5,
        companyName: "TechCorp Industries",
        position: "Senior Frontend Developer",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$130,000 - $175,000",
        description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
        status: "all"
    },
    {
        id: 6,
        companyName: "Startup Hub",
        position: "Frontend Developer",
        location: "Austin, TX",
        type: "Contract",
        salary: "$90,000 - $110,000",
        description: "Build interactive UI components for a dynamic startup environment. Proficiency in Vue.js and Tailwind CSS preferred.",
        status: "all"
    },
    {
        id: 7,
        companyName: "Global FinTech",
        position: "Security Analyst",
        location: "New York, NY",
        type: "Full-time",
        salary: "$110,000 - $140,000",
        description: "Ensure the security of financial transactions and user data. Certifications like CISSP or CEH are highly valued.",
        status: "all"
    },
    {
        id: 8,
        companyName: "E-commerce Giants",
        position: "Product Manager",
        location: "Remote",
        type: "Full-time",
        salary: "$130,000 - $160,000",
        description: "Lead cross-functional teams to deliver high-impact e-commerce features. Technical background is a plus.",
        status: "all"
    }
];

let activeTab = 'all';

// Elements
const totalCountEl = document.getElementById('total-count');
const interviewCountEl = document.getElementById('interview-count');
const rejectedCountEl = document.getElementById('rejected-count');
const currentTabCountEl = document.getElementById('current-tab-count');
const jobContainer = document.getElementById('job-container');
const emptyState = document.getElementById('empty-state');
const tabAll = document.getElementById('tab-all');
const tabInterview = document.getElementById('tab-interview');
const tabRejected = document.getElementById('tab-rejected');

function updateDashboard() {
    let totalJobs = 0;
    let interviewJobs = 0;
    let rejectedJobs = 0;

    for (let i = 0; i < jobsData.length; i++) {
        totalJobs++;
        if (jobsData[i].status === 'interview') {
            interviewJobs++;
        }
        if (jobsData[i].status === 'rejected') {
            rejectedJobs++;
        }
    }

    totalCountEl.innerText = totalJobs;
    interviewCountEl.innerText = interviewJobs;
    rejectedCountEl.innerText = rejectedJobs;
}

function changeTab(tabName) {
    activeTab = tabName;

    document.getElementById('tab-all').classList.remove('active');
    document.getElementById('tab-interview').classList.remove('active');
    document.getElementById('tab-rejected').classList.remove('active');

    let activeBtn = document.getElementById(`tab-${tabName}`);
    activeBtn.classList.add('active');

    renderJobs();
}

function updateJobStatus(jobId, newStatus) {
    for (let i = 0; i < jobsData.length; i++) {
        if (jobsData[i].id === jobId) {
            jobsData[i].status = newStatus;
        }
    }
    updateDashboard();
    renderJobs();
}

function deleteJob(jobId) {
    let newJobsData = [];
    for (let i = 0; i < jobsData.length; i++) {
        if (jobsData[i].id !== jobId) {
            newJobsData.push(jobsData[i]);
        }
    }
    jobsData = newJobsData;
    updateDashboard();
    renderJobs();
}

function renderJobs() {
    jobContainer.innerHTML = '';

    let filteredJobs = [];
    if (activeTab === 'all') {
        for (let i = 0; i < jobsData.length; i++) {
            filteredJobs.push(jobsData[i]);
        }
    } else {
        for (let i = 0; i < jobsData.length; i++) {
            if (jobsData[i].status === activeTab) {
                filteredJobs.push(jobsData[i]);
            }
        }
    }

    currentTabCountEl.innerText = filteredJobs.length;

    if (filteredJobs.length === 0) {
        emptyState.classList.remove('hidden');
        jobContainer.classList.add('hidden');
    } else {
        emptyState.classList.add('hidden');
        jobContainer.classList.remove('hidden');

        for (let i = 0; i < filteredJobs.length; i++) {
            let job = filteredJobs[i];

            let card = document.createElement('div');
            card.className = 'card bg-base-100 job-card';

            let deleteBtnHtml = `
                <button onclick="deleteJob(${job.id})" class="btn btn-square btn-sm btn-delete bg-transparent shadow-none">
                    <i class="fa-regular fa-trash-can text-xs"></i>
                </button>
            `;

            let badgeStyle = "badge-unapplied";
            let badgeText = "NOT APPLIED";

            if (job.status === 'interview') {
                badgeStyle = "badge-interview";
                badgeText = "INTERVIEWING";
            }
            if (job.status === 'rejected') {
                badgeStyle = "badge-rejected";
                badgeText = "REJECTED";
            }

            let interviewBtnClass = "";
            if (job.status === 'interview') {
                interviewBtnClass = "btn btn-sm btn-action btn-interview selected shadow-none";
            } else {
                interviewBtnClass = "btn btn-sm btn-action btn-interview shadow-none";
            }

            let rejectedBtnClass = "";
            if (job.status === 'rejected') {
                rejectedBtnClass = "btn btn-sm btn-action btn-rejected selected shadow-none";
            } else {
                rejectedBtnClass = "btn btn-sm btn-action btn-rejected shadow-none";
            }

            card.innerHTML = `
                ${deleteBtnHtml}
                <h3 class="job-company">${job.companyName}</h3>
                <p class="job-position">${job.position}</p>
                
                <div class="job-meta">
                    <span>${job.location}</span>
                    <span class="dot"></span>
                    <span>${job.type}</span>
                    <span class="dot"></span>
                    <span>${job.salary}</span>
                </div>

                <div class="badge badge-custom ${badgeStyle} border-none">
                    ${badgeText}
                </div>

                <p class="job-desc">
                    ${job.description}
                </p>

                <div class="card-actions">
                    <button onclick="updateJobStatus(${job.id}, 'interview')" class="${interviewBtnClass}">
                        INTERVIEW
                    </button>
                    <button onclick="updateJobStatus(${job.id}, 'rejected')" class="${rejectedBtnClass}">
                        REJECTED
                    </button>
                </div>
            `;
            jobContainer.appendChild(card);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateDashboard();
    renderJobs();
});
