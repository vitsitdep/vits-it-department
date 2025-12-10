import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Faculty = () => {
  const facultyMembers = [
    {
      id: 1,
      name: "Prof. B.V. Chowdary  ",
      position: "Head of Department",
      qualification: "Ph.D. in Computer Science Engineering",
      experience: "15+ years of teaching and research experience",
      specialization: "Data Mining, Machine Learning",
      email: "",
      publications: 24,
      awards: "Best Researcher Award 2022",
      image: "/BV-IT-HOD.jpg"
    },
    {
      id: 2,
      name: "Dr. M. Prabhakar",
      position: "Associate Professor",
      qualification: "Ph.D.",
      experience: "12 years of teaching experience",
      specialization: "Database Management Systems, Data Mining",
      email: "meena.gupta@vits.ac.in",
      publications: 15,
      awards: "Excellence in Teaching 2021",
      image: "/pp.jpeg"
    },
    {
      id: 3,
      name: "Dr. B. Naveen Kumar",
      position: "Associate Professor",
      qualification: "Ph.D.",
      experience: "8 years of teaching and 4 years of industry experience",
      specialization: "Computer Networks, Cloud Computing",
      email: "rajesh.kumar@vits.ac.in",
      publications: 12,
      awards: "Young Scientist Award 2020",
      image: "/nk.jpeg"
    },
    {
      id: 12,
      name: "K. Shiva Rama Krishna",
      position: "Associate Professor",
      qualification: "M.Tech in Computer Science",
      experience: "8 years of teaching and 4 years of industry experience",
      specialization: "Computer Networks, Cloud Computing",
      email: "rajesh.kumar@vits.ac.in",
      publications: 12,
      awards: "Young Scientist Award 2020",
      image: "public/srk.jpeg"
    },
    {
      id: 4,
      name: "Mr. Sk. Khaleelullah",
      position: "Assistant Professor",
      qualification: "M.Tech in Computer Science",
      experience: "9 years of teaching experience",
      specialization: "Web Technologies, Software Engineering",
      email: "sanjay.verma@vits.ac.in",
      publications: 8,
      awards: "Best Project Mentor 2023",
      image: "/public/sk.jpeg"
    },
    {
      id: 5,
      name: "Mrs. T. Aruna",
      position: "Assistant Professor",
      qualification: "Ph.D. in Information Security",
      experience: "7 years of teaching and research experience",
      specialization: "Cybersecurity, Cryptography",
      email: "priya.singh@vits.ac.in",
      publications: 18,
      awards: "Women in Tech Award 2022",
      image: "/ta.jpeg"
    },
    {
      id: 6,
      name: "Mr. J. Srikanth",
      position: "Assistant Professor",
      qualification: "M.Tech in Software Engineering",
      experience: "6 years of teaching and 3 years of industry experience",
      specialization: "Mobile Application Development, IoT",
      email: "amit.kumar@vits.ac.in",
      publications: 6,
      awards: "Innovation Award 2021",
      image: "/srik.jpeg"
    },
    {
      id: 7,
      name: "Mr. A. Sankar Reddy",
      position: "Assistant Professor",
      qualification: "Ph.D. in Artificial Intelligence",
      experience: "10 years of teaching and 5 years of research experience",
      specialization: "Artificial Intelligence, Natural Language Processing",
      email: "anjali.mehta@vits.ac.in",
      publications: 20,
      awards: "AI Research Excellence Award 2023",
      image: "/asr.jpg"
    },
    {
      id: 8,
      name: "Mr. M.S.B Kasyapa",
      position: "Assistant Professor",
      qualification: "Ph.D. in Data Science",
      experience: "8 years of teaching experience",
      specialization: "Big Data Analytics, Predictive Modeling",
      email: "rajiv.menon@vits.ac.in",
      publications: 14,
      awards: "Data Science Innovator Award 2022",
      image: "/msb.jpeg"
    },
    {
      id: 10,
      name: "Mrs. Ch. Sai Vijaya",
      position: "Assistant Professor",
      qualification: "M.Tech in Software Systems",
      experience: "4 years of teaching and 2 years of industry experience",
      specialization: "Software Development, Agile Methodologies",
      email: "arjun.patel@vits.ac.in",
      publications: 3,
      awards: "Emerging Educator Award 2023",
      image: "/vijaya.jpeg"
    },
    {
      id: 11,
      name: "Mr. G. Chanakya",
      position: "Assistant Professor",
      qualification: "M.Tech in Artificial Intelligence",
      experience: "5 years of teaching and 2 years of research experience",
      specialization: "Deep Learning, Computer Vision",
      email: "chanakya.g@vits.ac.in",
      publications: 10,
      awards: "AI Educator Award 2024",
      image: "/chan.jpeg"
    },
  ];

  const supportingStaffMembers = [
    {
      id: 101,
      name: "Maha Lakshmi",
      position: "Lab Incharge",
      image: "/ma.jpeg"
    },
    {
      id: 102,
      name: "V Surya Prakash",
      position: "System / Network Admin",
      image: "/a1.jpeg" // You can use a placeholder image
    },
    {
      id: 103,
      name: "G Disendra Kumar",
      position: "System / Network Admin",
      image: "/a3.jpeg" // You can use a placeholder image
    },
    {
      id: 104,
      name: "V Venu madhav",
      position: "System / Network Admin",
      image: "/a2.jpeg" // You can use a placeholder image
    },

    {
      id: 105,
      name: "Bala Mani",
      position: "DTP Operator",
      image: "/mane.jpeg"
    },

  ];

  const StaffCard = ({ staffMember, index }) => {
    return (
        <Card key={staffMember.id} className="overflow-hidden shadow-md card-hover-effect">
          <CardContent className="p-0">
            <div
                className={`bg-gradient-to-r ${
                    index % 2 === 0 ? 'from-department-blue/5 to-department-blue/10' : 'from-department-purple/5 to-department-purple/10'
                } p-6 flex items-center gap-4`}
            >
              <Avatar className="h-20 w-20 border-2 border-white shadow-md">
                {staffMember.image ? (
                    <img src={staffMember.image} className="h-full w-full object-cover rounded-full" alt={staffMember.name} />
                ) : (
                    <AvatarFallback
                        className={`${
                            index % 2 === 0 ? 'bg-department-blue' : 'bg-department-purple'
                        } text-white text-xl font-bold`}
                    >
                      {staffMember.name.split(' ').length > 1
                          ? staffMember.name.split(' ')[0][0] + staffMember.name.split(' ')[1][0]
                          : staffMember.name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                )}
              </Avatar>
              <div>
                <h3 className="font-semibold text-lg font-heading">{staffMember.name}</h3>
                <p className={`${index % 2 === 0 ? 'text-department-blue' : 'text-department-purple'} font-medium`}>
                  {staffMember.position}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
    );
  };

  return (
      <Layout>
        <section className="bg-gradient-to-r from-department-purple/10 to-department-blue/10 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 text-center text-department-dark">Our Faculty</h1>
            <p className="text-gray-700 max-w-3xl mx-auto text-center mb-0">
              Meet our team of experienced educators and researchers dedicated to excellence in IT education.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <p className="text-gray-700 mx-auto mb-12 max-w-4xl text-center">
            Our department has highly qualified and experienced faculty members dedicated to providing
            quality education and mentoring to students. They bring a wealth of knowledge from both
            academia and industry to ensure our students receive the best possible education.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyMembers.map((faculty, index) => (
                <Card key={faculty.id} className="overflow-hidden shadow-md card-hover-effect">
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-r ${index % 2 === 0 ? 'from-department-blue/5 to-department-blue/10' : 'from-department-purple/5 to-department-purple/10'} p-6 flex items-center gap-4`}>
                      <Avatar className="h-20 w-20 border-2 border-white shadow-md">
                        {faculty.image ? (
                            <img src={faculty.image} className="h-full w-full object-cover rounded-full" alt={faculty.name} />
                        ) : (
                            <AvatarFallback className={`${index % 2 === 0 ? 'bg-department-blue' : 'bg-department-purple'} text-white text-xl font-bold`}>
                              {faculty.name.split(' ').length > 1
                                  ? faculty.name.split(' ')[0][0] + faculty.name.split(' ')[1][0]
                                  : faculty.name.slice(0, 2).toUpperCase()}
                            </AvatarFallback>
                        )}
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-lg font-heading">{faculty.name}</h3>
                        <p className={`${index % 2 === 0 ? 'text-department-blue' : 'text-department-purple'} font-medium`}>{faculty.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>

        <section className="bg-gray-100 py-12 ">
          <div className="container mx-auto px-4 ">
            <h2 className="text-2xl font-bold mb-4 text-center text-department-dark">Supporting Staff</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              {supportingStaffMembers.map((staff, index) => (
                  <StaffCard key={staff.id} staffMember={staff} index={index} />
              ))}
            </div>
          </div>
        </section>
      </Layout>
  );
};

export default Faculty;