import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isGoalDialogOpen, setIsGoalDialogOpen] = useState(false);

  //Events 
  const events = [
    "Zero to Live: Website Creation and Deployment (18th - 21st August 2025)",
  ];

  return (
    <Layout>
      {/* Marquee Events Section */}
      
      <div className="bg-blue border-y-2 border-yellow-400 py-2 overflow-hidden relative">
        <div className="flex animate-marquee whitespace-nowrap"> <span className="md:px-16 text-purple-600 font-bold">Upcoming Events : </span>
          {[...events, ...events].map((event, idx) => (
            <span key={idx} className="text-yellow-800 font-semibold mx-4 flex-shrink-0">
              📢 {event}
            </span>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-department-purple/10 to-department-blue/10 md:py-12 transform-gpu will-change-auto">
          

        <div className="container mx-auto px-4 transform-gpu will-change-auto text-center">

          <div className="flex items-center mb-6 text-center justify-center">
            <img src="/vait-logo.png" alt="VAIT Department Logo" className="h-16 w-16 mr-4 rounded-full shadow-md" />
            <h1 className="text-4xl md:text-4xl font-bold text-department-dark leading-tight transform-gpu will-change-auto text-center">
              Department of <span className="text-department-purple transform-gpu will-change-auto">Information Technology</span>
            </h1>
          </div>
          <p className="text-gray-700 text-lg mb-8 transform-gpu will-change-auto">
            Shaping the future through innovation, quality education, and technological excellence. Join us in our journey to create tomorrow's IT leaders.
          </p>
        </div>
        <div className="container mx-auto px-4 transform-gpu will-change-auto">
          <div className="flex flex-col md:flex-row items-center transform-gpu will-change-auto">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12 animate-fade-in transform-gpu will-change-auto">
              <h3 className="text-4xl md:text-3xl font-bold text-department-purple leading-tight transform-gpu will-change-auto text-center">
                Preface of the Department
              </h3>
            <div className="animate-fade-in transform-gpu will-change-auto" style={{ animationDelay: '0.2s' }}>
              <img
                  src="/Preface.jpeg"
                  alt="Preface of IT Department"
                  className="rounded-lg shadow-2xl w-full h-auto transform-gpu will-change-auto"
              />
            </div>


            </div>
            <div className="md:w-1/2 animate-fade-in transform-gpu will-change-auto" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-4xl md:text-3xl font-bold text-department-purple leading-tight transform-gpu will-change-auto text-center">
                Placement Insights
              </h3>
              <img 
                src="/pr.jpeg" 
                alt="IT Department" 
                className="rounded-lg shadow-2xl w-full h-auto transform-gpu will-change-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 transform-gpu will-change-auto">
        {/* About Department Section */}
        <section className="animate-fade-in transform-gpu will-change-auto" style={{ animationDelay: '0.3s' }}>
          <h2 className="section-header transform-gpu will-change-auto">About Department</h2>
          <div className="prose max-w-none transform-gpu will-change-auto">
            <p className="text-gray-700 mb-4 text-lg transform-gpu will-change-auto">
              Department of Information Technology established in the year 2019 with an intake of 60. 
              The mission of the Department is to provide quality and value-laden education for 
              students, in the traditional and contemporary areas of Information Technology.
            </p>
            <p className="text-gray-700 mb-4 transform-gpu will-change-auto">
              Our department offers comprehensive courses in programming, database management, 
              networking, cybersecurity, web technologies, and artificial intelligence. We prepare 
              our students to excel in the rapidly evolving field of IT through a blend of 
              theoretical knowledge and practical applications.
            </p>
            <p className="text-gray-700 mb-6 transform-gpu will-change-auto">
              The department has well-equipped laboratories with modern facilities and is staffed 
              with highly qualified and experienced faculty who are dedicated to ensuring academic 
              excellence and professional growth of students.
            </p>
            <Button
              className="bg-department-purple text-white hover:bg-department-purple-dark"
              onClick={() => setIsGoalDialogOpen(true)}
            >
              Department Goals
            </Button>
            <Tabs defaultValue="vision-mission">
              <TabsList className="flex justify-center space-x-4">
                <TabsTrigger value="vision-mission" className="px-4 py-2 text-lg font-semibold text-department-purple border-b-2 border-transparent hover:border-department-purple">Vision & Mission</TabsTrigger>

                <TabsTrigger value="pso" className="px-4 py-2 text-lg font-semibold text-department-blue text-department-green border-b-2 border-transparent hover:border-department-green">Program Specific Outcomes</TabsTrigger>
              </TabsList>
              <TabsContent value="vision-mission" className="mt-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-blue-700 mb-2">Vision</h2>
                  <p className="text-gray-700 text-lg">
                    To emerge as a premier center for education and research in computer science and engineering and in transforming students into innovative professionals of contemporary and future technologies to cater the global needs of human resources for IT and ITES companies.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-blue-700 mb-2">Mission</h2>
                  <ul className="list-disc pl-6 text-gray-700 text-lg space-y-2">
                    <li>
                      To produce excellent computer science professionals by imparting quality training, hands-on experience, and value-based education.
                    </li>
                    <li>
                      To strengthen links with industry through collaborative partnerships in research & product development and student internships.
                    </li>
                    <li>
                      To promote research-based projects and activities among the students in the emerging areas of technology.
                    </li>
                    <li>
                      To explore opportunities for skill development in the application of computer science among rural and underprivileged populations.
                    </li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="pso" className="mt-6">
                <dl className="text-lg space-y-6">
                  <div>
                    <dt className="font-bold text-indigo-600">PSO1: Professional Skills</dt>
                    <dd className="text-gray-700">
                      Learn the basic concepts of Computer Science and Engineering and apply them to areas like Data Structures, Operating Systems, Computer Organization, Computer Networks, and Information Security in the design and implementation of complex systems.
                    </dd>
                  </div>

                  <div>
                    <dt className="font-bold text-indigo-600">PSO2: Problem-Solving Skills</dt>
                    <dd className="text-gray-700">
                      Provide solutions to complex Computer Science and Engineering problems using the latest hardware and software tools, along with analytical skills, to arrive at cost-effective and appropriate solutions.
                    </dd>
                  </div>

                  <div>
                    <dt className="font-bold text-indigo-600">PSO3: Entrepreneurship Skills and Career Management</dt>
                    <dd className="text-gray-700">
                      Demonstrate social awareness, environmental wisdom, and ethical responsibility to lead a successful career and sustain a passion for real-world applications using optimal resources as an entrepreneur.
                    </dd>
                  </div>
                </dl>

              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>

      {/* Goal Dialog */}
      <Dialog open={isGoalDialogOpen} onOpenChange={setIsGoalDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-department-purple">Department Goals</DialogTitle>
            <DialogDescription className="text-gray-700 mt-2 text-sm">
              <dl className="space-y-4">

                <div>
                  <dt className="font-semibold text-indigo-600">Deliver Industry-Relevant Curriculum</dt>
                  <dd className="text-gray-700">
                    Regularly we update the curriculum yearly to reflect emerging technologies such as AI, IoT, cybersecurity, and cloud computing.
                  </dd>
                </div>

                <div>
                  <dt className="font-semibold text-indigo-600">Research and Innovation in IT</dt>
                  <dd className="text-gray-700">
                    Promote interdisciplinary research, innovative ideas, and publication in reputed journals and conferences.
                  </dd>
                </div>

                <div>
                  <dt className="font-semibold text-indigo-600">Enhance Student Employability and Skill Development</dt>
                  <dd className="text-gray-700">
                    Provide certifications, internships, and training programs in collaboration with industry partners.
                  </dd>
                </div>

                <div>
                  <dt className="font-semibold text-indigo-600">Strengthen Industry-Academia Collaboration</dt>
                  <dd className="text-gray-700">
                    Build MoUs with tech companies for internships, guest lectures, real-world projects, and curriculum inputs.
                  </dd>
                </div>

                <div>
                  <dt className="font-semibold text-indigo-600">Ensure Quality Teaching and Continuous Learning</dt>
                  <dd className="text-gray-700">
                    Adopt modern pedagogical tools such as Project-Based Learning, flipped classrooms, online labs, and collaborative platforms.
                  </dd>
                </div>

                <div>
                  <dt className="font-semibold text-indigo-600">Encourage Entrepreneurship and Start-up Culture</dt>
                  <dd className="text-gray-700">
                    Support incubation centers, hackathons, and innovation challenges for students and faculty.
                  </dd>
                </div>

                <div>
                  <dt className="font-semibold text-indigo-600">Improve Infrastructure and Technological Resources</dt>
                  <dd className="text-gray-700">
                    Continuously upgrade labs, servers, and software tools to align with current industry standards.
                  </dd>
                </div>

                <div>
                  <dt className="font-semibold text-indigo-600">Promote Ethical and Responsible Use of Technology</dt>
                  <dd className="text-gray-700">
                    Emphasize cybersecurity, digital ethics, and data privacy in teaching and practice.
                  </dd>
                </div>

                <div>
                  <dt className="font-semibold text-indigo-600">Achieve National and International Accreditations</dt>
                  <dd className="text-gray-700">
                    Align programs with NBA standards to ensure quality and global recognition.
                  </dd>
                </div>

                <div>
                  <dt className="font-semibold text-indigo-600">Encourage Global Exposure and Collaboration</dt>
                  <dd className="text-gray-700">
                    Facilitate student and faculty exchange programs, MOUs with international institutions, and joint research.
                  </dd>
                </div>

              </dl>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>


      <div className="container mx-auto px-4 py-16 transform-gpu will-change-auto">
        {/* Stats Section */}
        <section className="mt-16 py-12 bg-gradient-to-r from-department-purple/5 to-department-blue/5 rounded-xl transform-gpu will-change-auto">
          <div className="container mx-auto px-4 transform-gpu will-change-auto">
            <h2 className="section-header-center mb-12 transform-gpu will-change-auto">Department Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transform-gpu will-change-auto">
              <div className="text-center p-6 bg-white rounded-lg shadow-md card-hover-effect transform-gpu will-change-auto">
                <div className="text-4xl font-bold text-department-purple mb-2 transform-gpu will-change-auto">94%</div>
                <div className="text-gray-700 transform-gpu will-change-auto">Placement Rate</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md card-hover-effect transform-gpu will-change-auto">
                <div className="text-4xl font-bold text-department-blue mb-2 transform-gpu will-change-auto">65+</div>
                <div className="text-gray-700 transform-gpu will-change-auto">Research Contributions</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md card-hover-effect transform-gpu will-change-auto">
                <div className="text-4xl font-bold text-department-purple mb-2 transform-gpu will-change-auto">9+</div>
                <div className="text-gray-700 transform-gpu will-change-auto">Industry Partners</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md card-hover-effect transform-gpu will-change-auto">
                <div className="text-4xl font-bold text-department-blue mb-2 transform-gpu will-change-auto">5</div>
                <div className="text-gray-700 transform-gpu will-change-auto">Active Student Clubs</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
