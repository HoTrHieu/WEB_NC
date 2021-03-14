import React from 'react';

const Profile = () => {
    return (
        <div className="page-section container-fluid page__container" style={{width: "80%"}}>
            <div className="page-separator">
                <div className="page-separator__text">Profile &amp; Privacy</div>
            </div>
            <div className="col-md-7 p-0">
            <div className="form-group">
            <label className="form-label">Your photo</label>
            <div className="media align-items-center">
                <a href="!#" className="media-left mr-16pt">
                    <img src="assets/images/people/110/guy-3.jpg" alt="people" width={56} className="rounded-circle" />
                </a>
                <div className="media-body">
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="inputGroupFile01" />
                    <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                </div>
                </div>
            </div>
            </div>
            <div className="form-group">
            <label className="form-label">Luma profile name</label>
            <input type="text" className="form-control" defaultValue="Luma.com/alexander" placeholder="Your profile name ..." />
            <small className="form-text text-muted">Your profile name will be used as part of your public profile URL address.</small>
            </div>
            <div className="form-group">
            <label className="form-label">About you</label>
            <textarea rows={3} className="form-control" placeholder="About you ..." defaultValue={""} />
            </div>
            <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" defaultChecked id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Display your real name on your profile</label>
                <small className="form-text text-muted">If unchecked, your profile name will be displayed instead of your full name.</small>
            </div>
            </div>
            <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" defaultChecked id="customCheck2" />
                <label className="custom-control-label" htmlFor="customCheck2">Allow everyone to see your profile</label>
                <small className="form-text text-muted">If unchecked, your profile will be private and no one except you will be able to view it.</small>
            </div>
            </div>
            <button type="submit" className="btn btn-primary">Save changes</button>
        </div>
        </div>
    );
};

export default Profile;