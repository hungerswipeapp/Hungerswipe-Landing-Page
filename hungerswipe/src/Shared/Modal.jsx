import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs";
import "../App.css";
import "../Modal.css";
import EarlyAccessForm from "./EarlyAccessForm";
import threeScreens from '../Assets/3-screens.png';
import logo from '../Assets/LogoWhiteBig.png';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow:'scroll'
  },
 
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function SpringModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleOpen}
        className="mx-auto lg:mx-0 hover:underline rounded md:bg-white HW-pink text-HS font-bold my-6 py-4 px-12 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      >
        Early Access
      </button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="lg:flex lg:flex-row lg:justify-center">
            <div className="login-box rounded-l">
              <div className="show">
                <IconButton onClick={handleClose} style={{float: 'right', color: "#686868", marginTop: '12', marginRight: '12'}}>
                  <CloseIcon/>
                </IconButton>
              </div>
              <div className="p-10">
                <h2 className='font-sans font-medium text-5xl modal-header mb-2'>Be a part of it.</h2>
                <p className='modal-info'>Are you an early adopter?</p>
                <p className="modal-info mb-4">Sign up for free and get our news update before it’s available to the public.</p>
                  <EarlyAccessForm 
                    count={props.count}
                    incrementCount={props.incrementCount}
                  />
              </div>
            </div>
            <div className="hide1000 brochure rounded-r">
              <IconButton onClick={handleClose} style={{float: 'right', color: "#686868", marginTop: '12', marginRight: '12'}}>
                <CloseIcon/>
              </IconButton>
              <div className="p-12">
                <div className="font-sans text-white font-medium text-5xl modal-header text-center mb-4">Swipe Right</div>
                <p className="text-white text-center mb-12">To your next restaurant destination</p>
                <img src={threeScreens} alt="3 Screens Preview" />
                <img className="w-1/2 h-auto mt-12 mx-auto" src={logo} alt="Logo" />
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
