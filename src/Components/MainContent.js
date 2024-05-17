import Hero from './Hero'
import CardJurusan from './Cardmajor'
import major1 from './../Assets/js1.jpg'
import major2 from './../Assets/js2.jpg'
import major3 from './../Assets/js3.jpg'
import CardActivity from './Cardactivity'
import act1 from './../Assets/act1.jpg'
import act2 from './../Assets/act2.jpg'
import act3 from './../Assets/act3.jpg'
import act4 from './../Assets/act4.jpg'
import act5 from './../Assets/act5.jpg'
import act6 from './../Assets/act6.jpg'


const Maincontent = () => {
    return (
        <div>
            <Hero />

            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1> SCHOOL MAJORS </h1>
                    </div>
                </div>

                <div className="justify-content-center text-center">
                    <div className="row">
                        <div className="col-lg-4">
                            <CardJurusan image={major1} major="Networking" description="Just for an example of description for networking major" />
                        </div>

                        <div className="col-lg-4">
                            <CardJurusan image={major2} major="Graphic Design" description="Just for an example of description for graphic design major" />
                        </div>

                        <div className="col-lg-4">
                            <CardJurusan image={major3} major="Arhitect" description="Just for an example of description for architect major" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row text-center">
                <div className="col-lg-12 text-center my-5">
                    <h1> ACTIVITIES </h1>
                </div>

                <div className="col-lg-10 my-3 caro2">
                    <CardActivity image={act1} description="AAAA" />
                </div>
                <div className="col-lg-10 my-3 caro2">
                    <CardActivity image={act2} description="BBBB" />
                </div>
                <div className="col-lg-10 my-3 caro2">
                    <CardActivity image={act3} description="CCCC" />
                </div>
                <div className="col-lg-10 my-3 caro2">
                    <CardActivity image={act4} description="DDDD" />
                </div>
                <div className="col-lg-10 my-3 caro2">
                    <CardActivity image={act5} description="EEEE" />
                </div>
                <div className="col-lg-10 my-3 caro2">
                    <CardActivity image={act6} description="FFFF" />
                </div>
            </div>
        </div>
    )
}

export default Maincontent