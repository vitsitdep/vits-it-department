import React, { useState } from "react";
import Layout from "../components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Users, Calendar, Code } from "lucide-react";

/* ===================== TYPES ===================== */
interface Club {
  id: number;
  name: string;
  description: string;
  studentCoordinators: string[];
  meetingSchedule: string;
  activities: string[];
  color: "purple" | "blue";
  members: number;
  established: string;
  eventsPdfFileId: string; // Google Drive File ID
}

/* ===================== HELPER ===================== */
const drivePreview = (fileId: string) =>
    `https://drive.google.com/file/d/${fileId}/preview`;

/* ===================== CLUB DATA ===================== */
const clubs: Club[] = [
  {
    id: 1,
    name: "InfyCoder",
    description:
        "A programming club focused on competitive coding, algorithms, and problem solving.",
    studentCoordinators: [
      "A K V S Chakravarthy",
      "Pittala Shrenik Kumar",
      "Bakuna Amulya",
      "R Khyathi Pradha",
      "Shaik Farha Begum",
      "Kanteti Jaya Chandra",
    ],
    meetingSchedule: "Every Saturday, 2:00 PM - 3:30 PM",
    activities: ["Coding Challenges", "Hackathons", "Guest Lectures"],
    color: "purple",
    members: 136,
    established: "2022",
    eventsPdfFileId: "1uvwWi2ll4bX0ODpw5Uadtpp4gjPqNg-9",
  },
  {
    id: 2,
    name: "SpeakEasy Club",
    description: "A club focused on improving communication and verbal skills.",
    studentCoordinators: [
      "M. Sai Rishitha",
      "JM. Praneetha",
      "M. Sai Rithika",
      "C. Navya Sri",
      "V. Sathvika",
    ],
    meetingSchedule: "Every Tuesday, 3:30 PM - 5:30 PM",
    activities: ["JAM Sessions", "Presentations", "Social Awareness"],
    color: "blue",
    members: 120,
    established: "2022",
    eventsPdfFileId: "1Gs1gi0Pm-3hG0S9OUD9PpnSAOBFTTBF1",
  },
  {
    id: 3,
    name: "NextGen",
    description: "Focused on startups, innovation, and emerging technologies.",
    studentCoordinators: [
      "Venkatapathi Babu",
      "Vure Sathvik",
      "Md. Mudassir",
      "K. Rakesh Reddy",
      "K. Nikhil Jai",
    ],
    meetingSchedule: "Every Wednesday, 2:00 PM - 3:30 PM",
    activities: ["IEP Sessions", "E-Summits", "Industry 4.0 Talks"],
    color: "purple",
    members: 110,
    established: "2024",
    eventsPdfFileId: "1t-FT-DY7sn7YVADqVSeLulDfWtdiMeJZ",
  },
  {
    id: 4,
    name: "Arts Club",
    description: "A club that unleashes the artistic you.",
    studentCoordinators: ["D.suraj", "Sk.muskan", "K.vijitha", "K.balaji", "V.charvitha"],
    meetingSchedule: "Every Thursday, 3:30 PM - 5:00 PM",
    activities: ["Poster making", "Drawing competitions", "Quizzes"],
    color: "blue",
    members: 136,
    established: "2022",
    eventsPdfFileId: "1VDHxRj2ZBSJno3px-PJADDrTrsUkX-Ta",
  },
  {
    id: 5,
    name: "Sports club",
    description:
        "A club dedicated to sports, fitness, and athletic events for students.",
    studentCoordinators: ["R Saivivek", "S.Harshith kumar", "S.Aishwarya", "K.Asritha", "S. Sadwika"],
    meetingSchedule: "Every Friday, 4:00 PM - 5:30 PM",
    activities: ["Football matches", "Cricket tournaments", "Athletics training"],
    color: "purple",
    members: 136,
    established: "2022",
    eventsPdfFileId: "1H_uaDNaBhkwntD2pzIIcwYV0la0ImDNt",
  },
];

/* ===================== NG-DSDC DATA ===================== */
interface NgDsdcMember {
  name: string;
  role?: string;       // For faculty
  rollNumber?: string; // For students
  club?: string;       // For students
}

interface NgDsdcProject {
  name: string;
  description: string;
  initialDevelopers: NgDsdcMember[];
  maintainedBy: NgDsdcMember[];
}

const ngDsdcProjects: NgDsdcProject[] = [
  {
    name: "Department Website",
    description: "Official IT department website",
    initialDevelopers: [
      { name: "M. S. B. KASYAPA", role: "Assistant Professor, Dept. of IT" },
      { name: "I. Venkatapathi Babu", rollNumber: "23891A1225", club: "NextGen Club" },
      { name: "V. Sathvik", rollNumber: "23891A1264", club: "NextGen Club" },
      { name: "K. Nikhil Jai", rollNumber: "24895A1203", club: "NextGen Club" },
      { name: "B. Mohith Reddy", rollNumber: "23891A1211", club: "NextGen Club" },
    ],
    maintainedBy: [
      { name: "M. S. B. KASYAPA", role: "Assistant Professor, Dept. of IT" },
      { name: "I. Venkatapathi Babu", rollNumber: "23891A1225", club: "NextGen Club" },
    ],
  },
  {
    name: "VGNT - NSS – Pranadhara",
    description: "Project for Vignan Blood Bank System",
    initialDevelopers: [
      { name: "K. Mohith", rollNumber: "23891A1231", club: "InfyCoder Club" },
      { name: "S. Abhitej", rollNumber: "23891A1201", club: "InfyCoder Club" },
      { name: "M. Mudassir", rollNumber: "23891A1236", club: "SpeakEasy Club" },
      { name: "G.V.Sri Harsha Ram", rollNumber: "23891A1222", club: "SpeakEasy Club" },
    ],
    maintainedBy: [], // no maintainers
  },
];

/* ===================== COMPONENT ===================== */
const Clubs = () => {
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);
  const [showDsdc, setShowDsdc] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  return (
      <Layout>
        {/* ===== HEADER ===== */}
        <section className="bg-gradient-to-r from-department-purple/10 to-department-blue/10 py-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-department-dark mb-3">
              Department Clubs
            </h1>
            <p className="max-w-3xl mx-auto text-gray-700">
              Our department hosts several student-led clubs that encourage
              technical, cultural, and personal growth.
            </p>
          </div>
        </section>

        {/* ===== CELLS SECTION ===== */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-center text-department-dark mb-8">
            Cells
          </h2>

          {/* Increased width */}
          <div className="max-w-2xl mx-auto">
            <Card className="border-l-4 border-department-purple bg-purple-50">
              <CardHeader className="text-center space-y-3">

                {/* Main Heading */}
                <CardTitle className="text-2xl font-bold text-department-blue">
                  NextGen-Department Software Development Cell
                </CardTitle>

                {/* Sub-heading */}
                <p className="text-lg font-bold text-department-purple">
                  NG-DSDC
                </p>

                {/* Full Description */}
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  NG-DSDC focuses on real-time software projects, departmental automation, and hands-on
                  development experience for students by working on practical,
                  industry-oriented applications.
                </CardDescription>

              </CardHeader>

              <CardContent className="flex justify-center">
                <button
                    onClick={() => setShowDsdc(true)}
                    className="px-8 py-2 rounded-md bg-department-purple text-white hover:opacity-90"
                >
                  View Projects & Students
                </button>
              </CardContent>
            </Card>
          </div>
        </div>


        {/* ===== CLUBS SECTION ===== */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-center text-department-dark mb-8">
            Clubs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {clubs.map((club) => (
                <Card
                    key={club.id}
                    className={`cursor-pointer shadow-lg border-t-4 ${
                        club.color === "purple"
                            ? "border-department-purple"
                            : "border-department-blue"
                    } hover:scale-[1.02] transition`}
                    onClick={() => setSelectedClub(club)}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle
                            className={
                              club.color === "purple"
                                  ? "text-department-purple"
                                  : "text-department-blue"
                            }
                        >
                          {club.name}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {club.description}
                        </CardDescription>
                      </div>
                      <Badge className="whitespace-nowrap">Est. {club.established}</Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{club.members} Members</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{club.meetingSchedule}</span>
                    </div>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>

        {/* ===== CLUB DETAILS DIALOG ===== */}
        <Dialog open={!!selectedClub} onOpenChange={() => setSelectedClub(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedClub?.name}</DialogTitle>
            </DialogHeader>

            {selectedClub && (
                <div className="space-y-4">
                  <p className="text-gray-700">{selectedClub.description}</p>

                  <div>
                    <p className="font-semibold">Student Coordinators</p>
                    <ul className="list-disc pl-5">
                      {selectedClub.studentCoordinators.map((c, i) => (
                          <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold">Activities</p>
                    <ul className="list-disc pl-5">
                      {selectedClub.activities.map((a, i) => (
                          <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold">Meeting Schedule</p>
                    <p>{selectedClub.meetingSchedule}</p>
                  </div>

                  <button
                      onClick={() => setPdfUrl(drivePreview(selectedClub.eventsPdfFileId))}
                      className="inline-block mt-4 px-6 py-2 rounded-md bg-department-purple text-white hover:opacity-90"
                  >
                    View Events (PDF)
                  </button>
                </div>
            )}
          </DialogContent>
        </Dialog>

        {/* ===== NG-DSDC DIALOG (DEVELOPERS + MAINTAINERS) ===== */}
        <Dialog open={showDsdc} onOpenChange={setShowDsdc}>
          <DialogContent className="max-w-5xl p-0 overflow-hidden">

            {/* Header */}
            <div className="bg-gradient-to-r from-department-purple to-department-blue p-6 text-white">
              <h2 className="text-2xl font-bold text-center">
                NextGen-Software Development Cell (NG-DSDC)
              </h2>
              <p className="text-center text-sm opacity-90 mt-1">
                Student-driven real-time software projects
              </p>
            </div>

            {/* Body */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50">
              {ngDsdcProjects.map((project, index) => (
                  <div
                      key={index}
                      className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition"
                  >
                    {/* Project Title */}
                    <h4 className="text-lg font-bold text-department-purple mb-1">
                      {project.name}
                    </h4>

                    <p className="text-sm text-gray-600 mb-4">
                      {project.description}
                    </p>

                    {/* Initial Developers */}
                    <div className="mb-4">
                      <p className="font-semibold text-sm mb-2 text-department-dark">
                        Initial Developers
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.initialDevelopers.map((dev, i) => (
                            <Badge
                                key={i}
                                className="bg-department-purple/10 text-department-purple"
                            >
                              {dev.role
                                  ? `${dev.name} (${dev.role})`
                                  : `${dev.name} (${dev.rollNumber}, ${dev.club} Member)`}
                            </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Presently Maintained By */}
                    {project.maintainedBy && project.maintainedBy.length > 0 && (
                        <div>
                          <p className="font-semibold text-sm mb-2 text-department-dark">
                            Presently Maintained By
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.maintainedBy.map((dev, i) => (
                                <Badge
                                    key={i}
                                    className="bg-department-blue/10 text-department-blue"
                                >
                                  {dev.role
                                      ? `${dev.name} (${dev.role})`
                                      : `${dev.name} (${dev.rollNumber}, ${dev.club}) Member`}
                                </Badge>
                            ))}
                          </div>
                        </div> )}
                  </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>


        {/* ===== PDF VIEWER DIALOG ===== */}
        <Dialog open={!!pdfUrl} onOpenChange={() => setPdfUrl(null)}>
          <DialogContent className="max-w-5xl max-h-[90vh]">
            <DialogHeader>
              <DialogTitle className="text-2xl">Events PDF</DialogTitle>
            </DialogHeader>
            {pdfUrl && (
                <iframe
                    src={pdfUrl}
                    width="100%"
                    height="600px"
                    style={{ border: "none" }}
                    title="Events PDF"
                />
            )}
          </DialogContent>
        </Dialog>
      </Layout>
  );
};

export default Clubs;
