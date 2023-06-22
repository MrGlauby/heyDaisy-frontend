import Footer from "../components/main/Footer";
import Navbar from "../components/main/Navbar";
import AllStudents from "../components/main/AllStudents";

function StudentGallery() {
  return (
    <>
      <Navbar />
      <AllStudents />
      <Footer />
    </>
  );
}

export default StudentGallery;
/*
<div>
  {users.length &&
    users.map((student) => <div> {student.firstName} </div>)}
  StudentGallery
</div>;*/
