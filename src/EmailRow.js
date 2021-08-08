import React from 'react';
import './EmailRow.css';
import { Checkbox, IconButton } from '@material-ui/core';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';

function EmailRow({ id, title, subject, description, time }) {
    return (
        <div className="emailRow">
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>
            <div className="emailRow__title">
                <h4>{title}</h4>
            </div>
            <div className="emailRow__message">

                <h4 className="emailRow__description">
                    {subject}
                    <span>{description}</span>
                </h4>
            </div>
            <div className="emailRow__description">
                <h4>{time}</h4>
            </div>
        </div>
    )
}

export default EmailRow
