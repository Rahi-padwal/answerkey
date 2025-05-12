import React from 'react';
import { useParams } from 'react-router-dom';
import './BranchPage.css'; // Create this CSS file

function BranchPage() {
    const { branchName } = useParams();
    const decodedBranchName = decodeURIComponent(branchName);
    const formattedBranchName = decodedBranchName.replace(/-/g, ' ').toUpperCase();

    // Replace this with your actual data for each branch
    const branchData = {
        "computer-science": ["Content for Computer Science 1", "Content for Computer Science 2", "...", /* Add more content/links here */],
        "information-technology": ["Content for IT 1", "Content for IT 2", "...", /* Add more content/links here */],
        "electronics-telecommunication": ["Content for E&TC 1", "Content for E&TC 2", "...", /* Add more content/links here */],
        "mechanical": ["Content for Mechanical 1", "Content for Mechanical 2", "...", /* Add more content/links here */],
        "instrumentation": ["Content for Instrumentation 1", "Content for Instrumentation 2", "...", /* Add more content/links here */],
    };

    const currentBranchContent = branchData[decodedBranchName];

    return (
        <div className="branch-page-container">
            <h2 className="branch-page-title">{formattedBranchName}</h2>
            {currentBranchContent ? (
                <div className="branch-content-grid">
                    {currentBranchContent.map((content, index) => (
                        <div key={index} className="branch-content-box">
                            <p>{content}</p>
                            {/* You can render links or more complex elements here */}
                        </div>
                    ))}
                </div>
            ) : (
                <p>No content available for {formattedBranchName}.</p>
            )}
            <button onClick={() => window.history.back()}>Go Back</button>
        </div>
    );
}

export default BranchPage;