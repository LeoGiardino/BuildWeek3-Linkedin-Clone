import { Card, Form } from 'react-bootstrap'
import '../../styles/AttivitaComp.css'
import { ArrowRight, Dot, XLg } from 'react-bootstrap-icons'
import { useEffect, useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Calendar3, CaretDownFill, Clock, EmojiSmile, Image, PatchMinusFill, ThreeDots } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addPosts } from '../../redux/actions/post';
import { getPosts } from '../../redux/actions/post';
import { getListaProfili } from '../../redux/actions/getListaProfili';
import { deletePost, postImgPost } from '../../redux/actions/post';
import { getMyPosts } from '../../redux/actions/myPost';



import Button from 'react-bootstrap/Button';




export default function AttivitaComp() {

    const posts = useSelector((state) => state?.post?.post);
    const profilo = useSelector((state) => state?.profili?.profili);
    const stato = useSelector((state) => state?.mieiPost?.post);   
    const [img, setImg] = useState('');
    const fileInputRef = useRef(null);

    const [postModal, setPostModal] = useState(false);

    const dispatch = useDispatch();


    console.log(posts);

    const [post, setPost] = useState({
        text: '',

    })

    console.log(stato);

    useEffect(() => {
        dispatch(getMyPosts(profilo?._id));
    }, [])

    const handleInputChange = (e) => {
        console.log("Input changed:", post);
        setPost({
            ...post,
            [e.target.name]: e.target.value

        })
    }

    const [show, setShow] = useState(false);


    useEffect(() => {
        dispatch(getPosts());
    }, [show]);
    // const postFiltrati = posts.filter(post => post?.user?._id === profilo?.id);


    const addImg = (e, id) => {
        const file = e.target.files[0];
        console.log("File:", file);
        console.log("ID:", id);

        // Verifica che fileInputRef.current sia definito
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }

        // Verifica che 'file' sia definito prima di chiamare dispatch
        if (file) {
            dispatch(postImgPost(file, id))
        }
    };






    return (

        <>
        
            <Card className='compBackgroundExp'>
                <Card.Body className='d-flex flex-column pb-0' >
                    <div className='d-flex justify-content-between mb-1'>
                        <div>
                            <h5>Attività</h5>
                            <span className='followerz'>630 follower</span>
                        </div>
                        <button className='btn2 fw-bold btnblue' onClick={() => setShow(true)}>Crea un post</button>
                    </div>

                    <div className='mb-4'>
                        <button className='fw-bold btngreen '>Post</button>
                        <button className='fw-bold btnblue2 '>Video</button>
                    </div>

                    {posts && profilo && posts.filter(post => post?.user?._id === profilo?._id).map((post) => (
                        <>
                        <div className='d-flex justify-content-between flex-column align-items-start expRow'>
                            <div className='d-flex'>

                                <span className='azioneAttivita'>{post?.user?.name} {post?.user?.surname} ha diffuso questo post <Dot /> 1 giorno</span>
                                <div className='d-flex justify-content-end align-items-start pennaEsperienza'>
                                    <img onClick={() => setPostModal(true)} className="infoPenExp justify-self-end" src="/src/assets/free_icon.svg" alt="" />
                                    {/* <XLg className='ms-2' onClick={() => { dispatch(deletePost(post._id)); dispatch(getPosts()) }} /> */}
                                </div>

                            </div>
                            <div className='d-flex mt-1'>
                                <div className='imgAttivita' onClick={() => fileInputRef.current.click()}
                                    alt="">
                                    <input
                                        ref={fileInputRef}
                                        type='file'
                                        style={{ display: 'none' }}
                                        onChange={(e) => addImg(e, post?._id)}
                                        accept='image/*'
                                    />
                                    <img style={{ width: '75px', height: '75px' }} className='rounded-1' src={post?.image}></img>
                                </div>
                                <div className='d-flex flex-column justify-content-between'>
                                    <span className='titoloPost'>{post?.text}</span>
                                    <span className='titoloPost'>...</span>
                                </div>
                            </div>
                            <div className='reactions d-flex justify-content-between align-items-center w-100 m-0'>
                                <p className=' d-flex justify-content-between align-items-center'>
                                    <img src='https://static.licdn.com/aero-v1/sc/h/emei2gdl9ikg7penkh9ij9llx' />
                                    <img src='https://static.licdn.com/aero-v1/sc/h/9wt27hvi2lgll1v30u00n0p5p' />
                                    <img src='https://static.licdn.com/aero-v1/sc/h/3bhtnif60blspoiyhoex4lfx' />
                                    <span className='reactionsNum'>614</span>
                                </p>
                                <p>20 commenti</p>
                            </div>
                        </div>

<Modal
size="lg"
show={postModal}
onHide={() => setPostModal(false)}
aria-labelledby="example-modal-sizes-title-lg"
>
<Modal.Header closeButton>
    <Modal.Title id="example-modal-sizes-title-lg">
        Modifica presentazione
    </Modal.Title>
</Modal.Header>
<Modal.Body>
    <span>* Indica che è obbligatorio</span>
    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Testo*</Form.Label>
            <Form.Control className='input' type="text" name='text' />
        </Form.Group>
        
        
     

    </Form>

    <Button className='btn-link text-decoration-none text-white' onClick={() => { setPostModal(false); dispatch(deletePost(post?._id)) }}>Elimina post</ Button>

    <Button className='float-end' onClick={() => { setPostModal(false) }}>Salva</Button>
</Modal.Body>
</Modal>
</>
                    ))}

                    {/* <div className='d-flex justify-content-between flex-column align-items-start expRow'>
                        <span className='azioneAttivita'>Utente ha diffuso questo post <Dot /> 1 giorno</span>
                        <div className='d-flex mt-1'>
                            <div className='imgAttivita'><img className='rounded-1' src='https://picsum.photos/60'></img></div>
                            <div className='d-flex flex-column justify-content-between'>
                                <span className='titoloPost'>Questo post è proprio incredibile -emoji fuoco- 2</span>
                                <span className='titoloPost'>Altre cose che compaiono nei post 2</span>
                            </div>
                        </div>
                        <div className='reactions d-flex justify-content-between align-items-center w-100 m-0'>
                            <p className=' d-flex justify-content-between align-items-center'>
                                <img src='https://static.licdn.com/aero-v1/sc/h/emei2gdl9ikg7penkh9ij9llx' />
                                <img src='https://static.licdn.com/aero-v1/sc/h/9wt27hvi2lgll1v30u00n0p5p' />
                                <img src='https://static.licdn.com/aero-v1/sc/h/esahr356vrv0vklww6hcjar1j' />
                                <span className='reactionsNum'>357</span>
                            </p>
                            <p>20 commenti <Dot /> 121 diffusioni post</p>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between flex-column align-items-start expRow'>
                        <span className='azioneAttivita'>Utente ha diffuso questo post <Dot /> 1 giorno</span>
                        <div className='d-flex mt-1'>
                            <div className='imgAttivita'><img className='rounded-1' src='https://picsum.photos/60'></img></div>
                            <div className='d-flex flex-column justify-content-between'>
                                <span className='titoloPost'>Questo post è proprio incredibile -emoji fuoco- 3</span>
                                <span className='titoloPost'>Altre cose che compaiono nei post 3</span>
                            </div>
                        </div>
                        <div className='reactions d-flex justify-content-between align-items-center w-100 m-0'>
                            <p className=' d-flex justify-content-between align-items-center'>
                                <img src='https://static.licdn.com/aero-v1/sc/h/emei2gdl9ikg7penkh9ij9llx' />
                                <img src='https://static.licdn.com/aero-v1/sc/h/esahr356vrv0vklww6hcjar1j' />
                                <img src='https://static.licdn.com/aero-v1/sc/h/3bhtnif60blspoiyhoex4lfx' />
                                <span className='reactionsNum'>891</span>
                            </p>
                            <p>20 commenti</p>
                        </div>
                    </div> */}

                </Card.Body>
                <Card.Footer className='text-center risorseFooter'>Mostra tutti i post (617) <ArrowRight /></Card.Footer>
            </Card>

            <Modal show={show} >
                <Modal.Header closeButton onClick={() => setShow(false)}>
                    <Modal.Title>
                        <div className='d-flex align-items-center headerModale'>
                            <img className='rounded-circle me-2 propicHomeC' src='https://picsum.photos/40' />
                            <div className='d-flex flex-column profiloModalePost'>
                                <span className='fw-bold'>Nome utente <CaretDownFill className='iconcine' /></span>
                                <span className='sottotitoloMod'>Pubblica: Chiunque</span>
                            </div>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='pt-0'>
                    <div className='d-flex flex-column align-items-start justify-content-between'>
                        <Form.Control type="text" placeholder="Di cosa vorresti parlare?" name='text' className='mioTextInput' onChange={handleInputChange} />
                       
                        <EmojiSmile className='iconcine ms-3 fs-5' />
                        <div className='iconeAggiunte d-flex align-items-center mt-2'>
                            <div className='addImgPost'>
                                <Image className='iconcine2 bg-dark' />


                            </div>
                            <div>
                                <Calendar3 className='iconcine2' />
                            </div>
                            <div>
                                <PatchMinusFill className='iconcine2' />
                            </div>
                            <div>
                                <ThreeDots className='iconcine2' />
                            </div>

                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Clock className='iconcine me-2 fs-5' />
                    
                    <button className='pubblicaBtn' variant="primary" onClick={() => { dispatch(addPosts(post)); setShow(false) }}>
                        Pubblica
                    </button>
                </Modal.Footer>
            </Modal>


           
        </>
    )
}
