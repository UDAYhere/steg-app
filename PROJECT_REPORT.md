# STEGANOGRAPHY WEB APPLICATION
## Secure Message Hiding System with Encryption

---

**A Project Report**

Submitted in partial fulfillment of the requirements for the degree of Bachelor of Technology

**Submitted by:**
[Uday Kumar] [12403342]
[Akash] [12409562]


**Department of Computer Application**
[Lovely Professional University]
[2025]

---

## CERTIFICATE

This is to certify that the project entitled **"Steganography Web Application: Secure Message Hiding System with Encryption"** submitted by [Your Name] in partial fulfillment of the requirements for the award of the degree of Bachelor of Technology in Computer Science and Engineering is a record of bonafide work carried out under my supervision and guidance.

**Guide:**
[Sophiya Sheikh]

Date: 9/11/2025

---

## ACKNOWLEDGEMENT

I would like to express my sincere gratitude to all those who have contributed to the successful completion of this project.

First and foremost, I am deeply grateful to my project guide [Guide Name] for their invaluable guidance, continuous support, and encouragement throughout the development of this project.


I extend my heartfelt thanks to [HOD Name], Head of the Department of Computer Science and Engineering, for providing the necessary facilities and resources for this project.

I am also thankful to all the faculty members and staff of the Computer Science and Engineering Department for their support and cooperation.

Finally, I would like to thank my family and friends for their constant encouragement and support throughout this endeavor.

**[UDAY KUMAR] [Akash]**

---

## ABSTRACT

In today's digital age, secure communication has become paramount. This project presents a web-based steganography application that enables users to hide secret messages within digital images using the Least Significant Bit (LSB) technique combined with AES-256 encryption.

The application supports multiple image formats (PNG, JPG, JPEG, GIF) and provides a user-friendly interface for both hiding and extracting secret messages. Key features include password-protected encryption, real-time image capacity calculation, and virus scanning capabilities.

The system is built using modern web technologies: React.js for the frontend and Node.js with Express for the backend. The implementation demonstrates the practical application of steganography and cryptography principles, providing a dual-layer security approach where messages are first encrypted and then hidden within images.

This project successfully achieves its objectives of creating a secure, user-friendly, and efficient steganography tool suitable for confidential communication in various scenarios.

**Keywords:** Steganography, LSB, AES-256 Encryption, Image Processing, Web Application, Secure Communication

---


## TABLE OF CONTENTS

1. **INTRODUCTION**
   - 1.1 Background
   - 1.2 Motivation
   - 1.3 Problem Definition
   - 1.4 Objectives
   - 1.5 Scope of the Project
   - 1.6 Organization of Report

2. **SYSTEM ANALYSIS**
   - 2.1 Existing System
   - 2.2 Proposed System
   - 2.3 Feasibility Study
   - 2.4 Software and Hardware Requirements
   - 2.5 Functional Requirements
   - 2.6 Non-Functional Requirements

3. **SYSTEM DESIGN**
   - 3.1 System Architecture
   - 3.2 Modular Design
   - 3.3 Data Flow Diagrams
   - 3.4 Use Case Diagram
   - 3.5 Sequence Diagrams
   - 3.6 Class Diagram
   - 3.7 Database Design
   - 3.8 User Interface Design

4. **IMPLEMENTATION AND CODING**
   - 4.1 Technology Stack
   - 4.2 Development Methodology
   - 4.3 Coding Standards
   - 4.4 Key Modules Implementation
   - 4.5 Screenshots

5. **TESTING**
   - 5.1 Testing Strategy
   - 5.2 Test Cases
   - 5.3 Test Results

6. **CONCLUSION AND FUTURE SCOPE**
   - 6.1 Conclusion
   - 6.2 Limitations
   - 6.3 Future Enhancements

7. **REFERENCES**

8. **APPENDICES**
   - Appendix A: Code Snippets
   - Appendix B: Additional Screenshots

---


## CHAPTER 1: INTRODUCTION

### 1.1 Background

In the modern digital era, information security has become a critical concern for individuals, organizations, and governments. With the exponential growth of digital communication, protecting sensitive information from unauthorized access has become increasingly important.

Steganography, derived from the Greek words "steganos" (covered) and "graphein" (writing), is the art and science of hiding information within other non-secret data. Unlike cryptography, which makes data unreadable, steganography conceals the very existence of the data. This dual approach of hiding and encrypting provides an additional layer of security.

Digital images are ideal carriers for steganographic techniques due to their widespread use and the human eye's inability to detect minor pixel modifications. The Least Significant Bit (LSB) technique is one of the most popular methods for image steganography, where the least significant bits of pixel values are modified to embed secret data.

### 1.2 Motivation

The motivation for this project stems from several key factors:

1. **Privacy Concerns**: With increasing surveillance and data breaches, individuals need secure methods to communicate sensitive information.

2. **Practical Application**: Combining steganography with encryption provides a robust security solution that addresses real-world communication needs.

3. **Educational Value**: Understanding and implementing steganographic techniques provides deep insights into information security, cryptography, and image processing.

4. **Accessibility**: Most existing steganography tools are either command-line based or lack user-friendly interfaces, creating a need for an accessible web-based solution.

5. **Multi-Format Support**: The need for a tool that works with various image formats (PNG, JPG, GIF) rather than being limited to a single format.


### 1.3 Problem Definition

Traditional communication methods face several security challenges:

1. **Interception Risk**: Messages sent through conventional channels can be intercepted and read by unauthorized parties.

2. **Metadata Exposure**: Even encrypted messages reveal that secure communication is taking place, potentially drawing unwanted attention.

3. **Limited Accessibility**: Existing steganography tools often require technical expertise and are not user-friendly for general users.

4. **Single-Layer Security**: Many solutions rely solely on either encryption or steganography, not both.

5. **Format Limitations**: Most tools support only specific image formats, limiting their practical applicability.

**Problem Statement**: There is a need for a user-friendly, web-based steganography application that combines encryption with image-based data hiding, supports multiple image formats, and provides real-time feedback on capacity and security.

### 1.4 Objectives

The primary objectives of this project are:

1. **Develop a Web-Based Steganography Tool**: Create an accessible, browser-based application for hiding and extracting secret messages in images.

2. **Implement LSB Steganography**: Use the Least Significant Bit technique to embed data in image pixels without visible distortion.

3. **Integrate AES-256 Encryption**: Provide optional password-based encryption using industry-standard AES-256 algorithm for enhanced security.

4. **Multi-Format Support**: Enable the application to work with PNG, JPG, JPEG, and GIF image formats.

5. **Real-Time Capacity Calculation**: Implement a capacity calculator that shows users how much text can be hidden in their selected image.

6. **Image Validation**: Include virus scanning and file validation to ensure image safety before processing.


7. **User-Friendly Interface**: Design an intuitive, professional interface that requires no technical expertise.

8. **Security Best Practices**: Implement secure coding practices, including proper file handling, input validation, and error management.

### 1.5 Scope of the Project

**In Scope:**

1. Web-based application accessible through modern browsers
2. Hide text messages in PNG, JPG, JPEG, and GIF images
3. Extract hidden text from steganographic images
4. Optional AES-256 password-based encryption
5. Real-time image capacity calculation and validation
6. Basic image file validation and safety checks
7. User-friendly interface with visual feedback
8. Support for images up to 10MB in size
9. Automatic conversion to PNG format for output (to preserve data integrity)

**Out of Scope:**

1. Hiding files other than text (e.g., PDFs, videos)
2. Advanced steganographic techniques beyond LSB
3. User authentication and account management
4. Database storage of images or messages
5. Mobile native applications
6. Batch processing of multiple images
7. Advanced virus scanning (integration with external antivirus APIs)
8. Steganography detection and analysis tools
9. Network-based communication features
10. Commercial deployment and scalability optimization


### 1.6 Organization of Report

This report is organized into six chapters:

- **Chapter 1** provides an introduction to the project, including background, motivation, problem definition, objectives, and scope.

- **Chapter 2** presents a detailed system analysis, covering existing systems, the proposed solution, feasibility study, and system requirements.

- **Chapter 3** describes the system design, including architecture, modular design, UML diagrams, and database design.

- **Chapter 4** discusses the implementation details, technology stack, coding standards, and includes screenshots of the application.

- **Chapter 5** covers the testing methodology, test cases, and results.

- **Chapter 6** concludes the report with a summary of achievements, limitations, and future enhancement possibilities.

---

## CHAPTER 2: SYSTEM ANALYSIS

### 2.1 Existing System

Several steganography tools and applications currently exist, but they have various limitations:

**Desktop Applications:**
- Tools like OpenStego, Steghide, and SilentEye
- Require installation and system-specific compatibility
- Often have outdated or complex user interfaces
- Limited to specific operating systems

**Online Tools:**
- Basic web-based steganography tools
- Often lack encryption capabilities
- No capacity calculation or validation
- Security concerns with uploading sensitive data to third-party servers
- Limited format support

**Command-Line Tools:**
- Powerful but require technical expertise
- Not accessible to general users
- Steep learning curve


**Drawbacks of Existing Systems:**

1. **Lack of Integration**: Most tools provide either steganography or encryption, not both.
2. **Poor User Experience**: Complex interfaces that are not intuitive for non-technical users.
3. **Limited Format Support**: Restricted to PNG or BMP formats only.
4. **No Capacity Feedback**: Users don't know if their message will fit until they try.
5. **Security Concerns**: Online tools require uploading sensitive data to external servers.
6. **No Validation**: Lack of file validation and safety checks.
7. **Platform Dependency**: Desktop applications are OS-specific.
8. **No Real-Time Feedback**: Users receive errors only after processing attempts.

### 2.2 Proposed System

The proposed steganography web application addresses the limitations of existing systems by providing:

**Key Features:**

1. **Dual-Layer Security**: Combines AES-256 encryption with LSB steganography for enhanced protection.

2. **Web-Based Architecture**: Accessible from any device with a modern browser, no installation required.

3. **Multi-Format Support**: Works with PNG, JPG, JPEG, and GIF images.

4. **Real-Time Capacity Calculator**: Shows maximum capacity and current usage with visual progress bars.

5. **Smart Validation**: Prevents users from attempting to hide text that exceeds image capacity.

6. **File Safety Checks**: Validates file signatures and performs basic security checks.

7. **Professional UI/UX**: Clean, modern interface with intuitive navigation and visual feedback.

8. **Client-Side Processing**: Images are processed locally on the server without permanent storage, ensuring privacy.


9. **Optional Encryption**: Users can choose to encrypt messages or hide them directly.

10. **Format Preservation**: Output is always saved as PNG to preserve hidden data integrity.

**Advantages of Proposed System:**

1. **Enhanced Security**: Two-layer protection (encryption + steganography)
2. **User-Friendly**: Intuitive interface suitable for all users
3. **Cross-Platform**: Works on Windows, macOS, Linux, and mobile browsers
4. **Privacy-Focused**: No permanent storage of user data
5. **Real-Time Feedback**: Immediate capacity and validation information
6. **Professional Design**: Modern, clean interface with visual indicators
7. **Flexible**: Optional password protection based on user needs
8. **Educational**: Demonstrates practical application of security concepts

### 2.3 Feasibility Study

**2.3.1 Technical Feasibility**

The project is technically feasible as:

- **Technology Availability**: All required technologies (React, Node.js, Jimp, crypto) are mature, well-documented, and freely available.
- **Development Skills**: The project requires knowledge of JavaScript, web development, and basic cryptography concepts, which are standard in computer science curriculum.
- **Algorithm Implementation**: LSB steganography and AES encryption are well-established algorithms with proven implementations.
- **Browser Compatibility**: Modern browsers support all required features (File API, Canvas API, etc.).
- **Performance**: Image processing can be efficiently handled by Node.js libraries.

**Technical Risk Assessment**: Low - All technologies are proven and stable.


**2.3.2 Economic Feasibility**

The project is economically feasible because:

- **Zero Licensing Costs**: All technologies used are open-source and free.
- **Minimal Infrastructure**: Can be developed and tested on standard development machines.
- **No External Dependencies**: No paid APIs or services required.
- **Low Deployment Cost**: Can be hosted on free or low-cost platforms (Heroku, Vercel, Netlify).
- **Development Time**: Estimated 4-6 weeks for a single developer.

**Cost Breakdown:**
- Software: $0 (all open-source)
- Hardware: Existing development machine
- Hosting (optional): $0-$10/month
- Total Investment: Minimal

**Economic Risk Assessment**: Very Low - No significant financial investment required.

**2.3.3 Operational Feasibility**

The system is operationally feasible as:

- **User Acceptance**: Simple interface requires minimal training.
- **Maintenance**: Standard web application maintenance procedures apply.
- **Scalability**: Architecture supports scaling if needed.
- **Browser-Based**: No installation or updates required from users.
- **Documentation**: Comprehensive README and user guide provided.

**Operational Risk Assessment**: Low - Standard web application operations.

**2.3.4 Schedule Feasibility**

The project can be completed within the academic timeline:

- Week 1-2: Requirements analysis and system design
- Week 3-4: Backend development (LSB, encryption, file handling)
- Week 5-6: Frontend development (React components, UI/UX)
- Week 7: Integration and testing
- Week 8: Documentation and final refinements

**Schedule Risk Assessment**: Low - Realistic timeline with buffer for issues.


### 2.4 Software and Hardware Requirements

**2.4.1 Software Requirements**

**Development Environment:**
- Operating System: Windows 10/11, macOS, or Linux
- Code Editor: Visual Studio Code, WebStorm, or similar
- Version Control: Git
- Browser: Chrome, Firefox, Safari, or Edge (latest versions)

**Backend Technologies:**
- Node.js (v14.x or higher)
- Express.js (v4.x)
- Jimp (v0.22.x) - Image processing library
- Multer (v1.4.x) - File upload handling
- Node.js Crypto module - Built-in encryption

**Frontend Technologies:**
- React.js (v18.x)
- Axios (v1.x) - HTTP client
- HTML5, CSS3, JavaScript (ES6+)

**Development Tools:**
- npm or yarn - Package manager
- Nodemon - Development server auto-restart
- React Scripts - React development tools

**2.4.2 Hardware Requirements**

**Development Machine:**
- Processor: Intel Core i3 or equivalent (minimum), i5 or higher (recommended)
- RAM: 4GB (minimum), 8GB or higher (recommended)
- Storage: 10GB free space
- Internet Connection: Required for package installation

**Server/Deployment:**
- Processor: 1 vCPU (minimum)
- RAM: 512MB (minimum), 1GB (recommended)
- Storage: 5GB
- Network: Stable internet connection


**Client Requirements:**
- Any device with a modern web browser
- Internet connection
- Minimum screen resolution: 1024x768

### 2.5 Functional Requirements

**FR1: Image Upload**
- System shall accept PNG, JPG, JPEG, and GIF image files
- System shall validate file type and size (max 10MB)
- System shall display image preview after upload

**FR2: Capacity Calculation**
- System shall calculate maximum text capacity based on image dimensions
- System shall display capacity in real-time
- System shall show usage percentage with visual progress bar

**FR3: Text Hiding**
- System shall accept text input from user
- System shall validate text length against image capacity
- System shall optionally encrypt text with user-provided password
- System shall embed text in image using LSB technique
- System shall generate downloadable PNG image with hidden data

**FR4: Text Extraction**
- System shall accept image file with hidden data
- System shall extract hidden text from image
- System shall optionally decrypt text if password is provided
- System shall display extracted text to user
- System shall provide copy-to-clipboard functionality

**FR5: Password Protection**
- System shall accept optional password for encryption
- System shall use AES-256-CBC encryption algorithm
- System shall generate random salt and IV for each encryption
- System shall validate password during extraction
- System shall display appropriate error for wrong password


**FR6: File Validation**
- System shall verify file signatures
- System shall check file size limits
- System shall validate image format
- System shall display validation results

**FR7: User Interface**
- System shall provide tabbed navigation (Hide, Extract, Scan)
- System shall display clear error and success messages
- System shall show loading indicators during processing
- System shall provide responsive design for different screen sizes

### 2.6 Non-Functional Requirements

**NFR1: Performance**
- Image processing shall complete within 5 seconds for images up to 5MB
- UI shall respond to user actions within 100ms
- Capacity calculation shall be instantaneous

**NFR2: Security**
- System shall not store uploaded images permanently
- System shall use secure encryption algorithms (AES-256)
- System shall validate all user inputs
- System shall handle errors gracefully without exposing system details

**NFR3: Usability**
- Interface shall be intuitive and require no training
- Error messages shall be clear and actionable
- Visual feedback shall be provided for all operations
- System shall work on standard browsers without plugins

**NFR4: Reliability**
- System shall handle file upload errors gracefully
- System shall clean up temporary files after processing
- System shall validate data integrity during extraction


**NFR5: Maintainability**
- Code shall follow consistent coding standards
- System shall be modular and well-documented
- Functions shall be reusable and testable

**NFR6: Portability**
- System shall work on Windows, macOS, and Linux
- System shall be browser-independent
- System shall not require specific hardware

**NFR7: Scalability**
- Architecture shall support future feature additions
- System shall handle multiple concurrent users (if deployed)

---

## CHAPTER 3: SYSTEM DESIGN

### 3.1 System Architecture

The application follows a client-server architecture with clear separation of concerns:

**Architecture Overview:**

```
┌─────────────────────────────────────────────────────────┐
│                     CLIENT LAYER                         │
│  ┌──────────────────────────────────────────────────┐  │
│  │           React.js Frontend                       │  │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐ │  │
│  │  │ Hide Text  │  │  Extract   │  │   Virus    │ │  │
│  │  │ Component  │  │   Text     │  │  Scanner   │ │  │
│  │  │            │  │ Component  │  │ Component  │ │  │
│  │  └────────────┘  └────────────┘  └────────────┘ │  │
│  │                                                   │  │
│  │  ┌────────────────────────────────────────────┐ │  │
│  │  │        Capacity Calculator                  │ │  │
│  │  └────────────────────────────────────────────┘ │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                          │
                    HTTP/HTTPS
                          │
┌─────────────────────────────────────────────────────────┐
│                     SERVER LAYER                         │
│  ┌──────────────────────────────────────────────────┐  │
│  │           Express.js Backend                      │  │
│  │  ┌────────────────────────────────────────────┐ │  │
│  │  │         API Routes                          │ │  │
│  │  │  /api/steganography/hide                    │ │  │
│  │  │  /api/steganography/extract                 │ │  │
│  │  │  /api/steganography/scan                    │ │  │
│  │  └────────────────────────────────────────────┘ │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                   BUSINESS LOGIC LAYER                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │     LSB      │  │  Encryption  │  │    Virus     │ │
│  │ Steganography│  │   (AES-256)  │  │   Scanner    │ │
│  │    Module    │  │    Module    │  │    Module    │ │
│  └──────────────┘  └──────────────┘  └──────────────┘ │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                   FILE SYSTEM LAYER                      │
│  ┌──────────────────────────────────────────────────┐  │
│  │         Temporary File Storage                    │  │
│  │              (uploads/ folder)                    │  │
│  │         Auto-cleanup after processing             │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```


**Architecture Components:**

1. **Client Layer (Frontend)**
   - React-based single-page application
   - Three main components: HideText, ExtractText, VirusScanner
   - Handles user interactions and displays results
   - Performs client-side image capacity calculations

2. **Server Layer (Backend)**
   - Express.js REST API server
   - Handles HTTP requests and responses
   - Manages file uploads using Multer middleware
   - Routes requests to appropriate business logic modules

3. **Business Logic Layer**
   - LSB Steganography Module: Implements hiding and extraction algorithms
   - Encryption Module: Handles AES-256 encryption and decryption
   - Virus Scanner Module: Validates file integrity and safety

4. **File System Layer**
   - Temporary storage for uploaded and processed images
   - Automatic cleanup after processing
   - No permanent data storage

### 3.2 Modular Design

The system is divided into the following modules:

**3.2.1 Frontend Modules**

**Module 1: HideText Component**
- Purpose: Interface for hiding text in images
- Functions:
  - Image upload and preview
  - Capacity calculation and display
  - Text input with validation
  - Password input (optional)
  - Progress bar visualization
  - File download trigger


**Module 2: ExtractText Component**
- Purpose: Interface for extracting hidden text
- Functions:
  - Image upload and preview
  - Password input (optional)
  - Text extraction and display
  - Copy to clipboard functionality
  - Error handling for wrong passwords

**Module 3: VirusScanner Component**
- Purpose: Interface for validating image files
- Functions:
  - Image upload and preview
  - File validation and scanning
  - Display validation results
  - Show file properties and checks

**Module 4: App Component**
- Purpose: Main application container
- Functions:
  - Tab navigation management
  - Component routing
  - Global state management

**3.2.2 Backend Modules**

**Module 5: LSB Steganography Module (lsb.js)**
- Purpose: Core steganography logic
- Functions:
  - `hideText(inputPath, outputPath, text, password)`: Embeds text in image
  - `extractText(inputPath, password)`: Extracts text from image
  - `textToBinary(text)`: Converts text to binary
  - `binaryToText(binary)`: Converts binary to text

**Module 6: Encryption Module (encryption.js)**
- Purpose: Handles encryption and decryption
- Functions:
  - `encryptText(text, password)`: Encrypts text using AES-256
  - `decryptText(encryptedData, password)`: Decrypts encrypted text
  - `deriveKey(password, salt)`: Derives encryption key using PBKDF2


**Module 7: Virus Scanner Module (virusScanner.js)**
- Purpose: Validates file safety
- Functions:
  - `scanFile(filePath)`: Performs file validation
  - Checks file signature
  - Validates file size
  - Verifies image format

**Module 8: API Routes Module (steganography.js)**
- Purpose: Handles HTTP requests
- Endpoints:
  - `POST /api/steganography/hide`: Hide text in image
  - `POST /api/steganography/extract`: Extract text from image
  - `POST /api/steganography/scan`: Scan image for safety

**Module 9: Server Module (server.js)**
- Purpose: Main server configuration
- Functions:
  - Express server setup
  - Middleware configuration
  - Route registration
  - Error handling

### 3.3 Data Flow Diagrams

**3.3.1 Level 0 DFD (Context Diagram)**

```
                    ┌─────────────┐
                    │             │
                    │    User     │
                    │             │
                    └──────┬──────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
    Image +            Image +            Image
    Text +             Password           
    Password               │
        │                  │
        ▼                  ▼
    ┌───────────────────────────────────┐
    │                                   │
    │   Steganography Web Application   │
    │                                   │
    └───────────────────────────────────┘
        │                  │
        │                  │
        ▼                  ▼
    Modified           Extracted
    Image              Text
```


**3.3.2 Level 1 DFD (Hide Text Process)**

```
User ──Image + Text + Password──> [1.0 Validate Input] ──Valid Data──> [2.0 Calculate Capacity]
                                          │
                                          │ Invalid
                                          ▼
                                    Error Message
                                    
[2.0 Calculate Capacity] ──Capacity Info──> [3.0 Encrypt Text] ──Encrypted Text──> [4.0 Hide in Image]
                                                    │
                                                    │ (if password provided)
                                                    
[4.0 Hide in Image] ──Modified Image──> [5.0 Save as PNG] ──Download Link──> User
```

**3.3.3 Level 1 DFD (Extract Text Process)**

```
User ──Image + Password──> [1.0 Validate Image] ──Valid Image──> [2.0 Extract Bits]
                                    │
                                    │ Invalid
                                    ▼
                              Error Message
                              
[2.0 Extract Bits] ──Binary Data──> [3.0 Convert to Text] ──Text──> [4.0 Decrypt]
                                                                          │
                                                                          │ (if password)
                                                                          ▼
                                                                    Decrypted Text ──> User
```


### 3.4 Use Case Diagram

```
                    ┌─────────────────────────────────────┐
                    │  Steganography Web Application      │
                    │                                     │
                    │  ┌───────────────────────────────┐ │
                    │  │   Hide Text in Image          │ │
    ┌──────┐        │  │   - Upload Image              │ │
    │      │───────────│   - View Capacity             │ │
    │ User │        │  │   - Enter Text                │ │
    │      │───────────│   - Add Password (Optional)   │ │
    └──────┘        │  │   - Download Result           │ │
       │            │  └───────────────────────────────┘ │
       │            │                                     │
       │            │  ┌───────────────────────────────┐ │
       │            │  │   Extract Text from Image     │ │
       └───────────────│   - Upload Image              │ │
                    │  │   - Enter Password (Optional) │ │
                    │  │   - View Extracted Text       │ │
                    │  │   - Copy to Clipboard         │ │
                    │  └───────────────────────────────┘ │
                    │                                     │
                    │  ┌───────────────────────────────┐ │
                    │  │   Scan Image for Safety       │ │
                    │  │   - Upload Image              │ │
                    │  │   - View Validation Results   │ │
                    │  └───────────────────────────────┘ │
                    └─────────────────────────────────────┘
```


### 3.5 Sequence Diagrams

**3.5.1 Hide Text Sequence Diagram**

```
User          Frontend        Backend         LSB Module      Encryption      File System
 │                │              │                │               │                │
 │──Upload Image──>│              │                │               │                │
 │                │──Calculate───>│                │               │                │
 │                │   Capacity    │                │               │                │
 │<──Show Capacity│              │                │               │                │
 │                │              │                │               │                │
 │──Enter Text────>│              │                │               │                │
 │──Enter Password>│              │                │               │                │
 │──Click Hide────>│              │                │               │                │
 │                │──POST /hide──>│                │               │                │
 │                │              │──Save Upload───>│               │                │
 │                │              │                │──Encrypt Text─>│                │
 │                │              │<──Encrypted────│               │                │
 │                │              │──Hide Text─────>│               │                │
 │                │              │                │──Modify Pixels>│                │
 │                │              │                │──Save PNG─────>│                │
 │                │              │<──Success──────│               │                │
 │                │<──Download───│                │               │                │
 │<──File─────────│              │                │               │                │
```

**3.5.2 Extract Text Sequence Diagram**

```
User          Frontend        Backend         LSB Module      Encryption
 │                │              │                │               │
 │──Upload Image──>│              │                │               │
 │──Enter Password>│              │                │               │
 │──Click Extract─>│              │                │               │
 │                │──POST────────>│                │               │
 │                │   /extract    │                │               │
 │                │              │──Extract Bits──>│               │
 │                │              │<──Binary Data───│               │
 │                │              │──Convert Text───>│               │
 │                │              │<──Encrypted Text│               │
 │                │              │──Decrypt────────>│               │
 │                │              │<──Plain Text────│               │
 │                │<──Response───│                │               │
 │<──Display Text─│              │                │               │
```


### 3.6 Class Diagram

```
┌─────────────────────────────┐
│      HideText               │
├─────────────────────────────┤
│ - image: File               │
│ - text: String              │
│ - preview: String           │
│ - loading: Boolean          │
│ - message: String           │
│ - capacity: Object          │
├─────────────────────────────┤
│ + handleImageChange()       │
│ + calculateCapacity()       │
│ + handleSubmit()            │
│ + render()                  │
└─────────────────────────────┘

┌─────────────────────────────┐
│      ExtractText            │
├─────────────────────────────┤
│ - image: File               │
│ - preview: String           │
│ - extractedText: String     │
│ - loading: Boolean          │
│ - message: String           │
├─────────────────────────────┤
│ + handleImageChange()       │
│ + handleSubmit()            │
│ + copyToClipboard()         │
│ + render()                  │
└─────────────────────────────┘

┌─────────────────────────────┐
│      VirusScanner           │
├─────────────────────────────┤
│ - image: File               │
│ - preview: String           │
│ - scanResult: Object        │
│ - loading: Boolean          │
│ - message: String           │
├─────────────────────────────┤
│ + handleImageChange()       │
│ + handleScan()              │
│ + render()                  │
└─────────────────────────────┘

┌─────────────────────────────┐
│      LSBSteganography       │
├─────────────────────────────┤
│ + hideText()                │
│ + extractText()             │
│ + textToBinary()            │
│ + binaryToText()            │
└─────────────────────────────┘

┌─────────────────────────────┐
│      Encryption             │
├─────────────────────────────┤
│ + encryptText()             │
│ + decryptText()             │
│ + deriveKey()               │
└─────────────────────────────┘

┌─────────────────────────────┐
│      VirusScannerModule     │
├─────────────────────────────┤
│ + scanFile()                │
│ + validateSignature()       │
└─────────────────────────────┘
```


### 3.7 Database Design

**Note:** This application does not use a traditional database. All data is processed in-memory and temporarily stored in the file system.

**File System Structure:**

```
steganography-app/
├── server/
│   └── uploads/              # Temporary file storage
│       ├── [timestamp]-[filename].png
│       └── hidden-[timestamp].png
```

**Temporary Storage Details:**

- **Purpose**: Store uploaded and processed images temporarily during processing
- **Lifecycle**: Files are automatically deleted after processing completes
- **Security**: No permanent storage of user data ensures privacy
- **Cleanup**: Automatic cleanup on success, error, or server restart

**Data Flow:**
1. User uploads image → Saved to uploads/ with unique timestamp
2. Processing occurs → New file created with "hidden-" prefix
3. File sent to user → Both original and processed files deleted
4. No data persistence → Complete privacy

### 3.8 User Interface Design

**3.8.1 Main Application Layout**

```
┌────────────────────────────────────────────────────────────┐
│                    Steganography                            │
│          Hide and extract secret messages in images         │
├────────────────────────────────────────────────────────────┤
│  ┌──────────────┬──────────────┬──────────────┐           │
│  │  Hide Text   │ Extract Text │  Scan Image  │           │
│  └──────────────┴──────────────┴──────────────┘           │
├────────────────────────────────────────────────────────────┤
│                                                             │
│                    [Active Tab Content]                     │
│                                                             │
│                                                             │
└────────────────────────────────────────────────────────────┘
```


**3.8.2 Hide Text Interface**

```
┌────────────────────────────────────────────────────────────┐
│  Hide Secret Text in Image                                  │
├────────────────────────────────────────────────────────────┤
│                                                             │
│  Select Image (PNG, JPG, JPEG, GIF):                       │
│  ┌─────────────────────────────────────────────────────┐  │
│  │  [Choose File]  No file chosen                       │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐  │
│  │           [Image Preview]                            │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐  │
│  │  Image Capacity                                      │  │
│  │  Image Size: 1920 × 1080 pixels                     │  │
│  │  Maximum Capacity: 777,600 characters                │  │
│  │  Current Message: 150 characters                     │  │
│  │  ████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │  │
│  │  ✓ 0.02% used - Plenty of space                     │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                             │
│  Secret Text:                                               │
│  ┌─────────────────────────────────────────────────────┐  │
│  │  Enter your secret message here...                   │  │
│  │                                                       │  │
│  └─────────────────────────────────────────────────────┘  │
│  150 characters                                             │
│                                                             │
│  Password (Optional):                                       │
│  ┌─────────────────────────────────────────────────────┐  │
│  │  ••••••••••                                          │  │
│  └─────────────────────────────────────────────────────┘  │
│  Leave empty for no encryption                              │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐  │
│  │           Hide Text in Image                         │  │
│  └─────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────┘
```


**3.8.3 Extract Text Interface**

```
┌────────────────────────────────────────────────────────────┐
│  Extract Hidden Text from Image                             │
├────────────────────────────────────────────────────────────┤
│                                                             │
│  Select Image (PNG, JPG, JPEG, GIF):                       │
│  ┌─────────────────────────────────────────────────────┐  │
│  │  [Choose File]  hidden-message.png                   │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐  │
│  │           [Image Preview]                            │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                             │
│  Password (Optional):                                       │
│  ┌─────────────────────────────────────────────────────┐  │
│  │  ••••••••••                                          │  │
│  └─────────────────────────────────────────────────────┘  │
│  Leave empty if message is not encrypted                    │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐  │
│  │           Extract Hidden Text                        │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐  │
│  │  Extracted Text:                                     │  │
│  │  ┌───────────────────────────────────────────────┐ │  │
│  │  │  This is the secret message that was hidden   │ │  │
│  │  │  in the image using steganography!            │ │  │
│  │  └───────────────────────────────────────────────┘ │  │
│  │  ┌───────────────────────────────────────────────┐ │  │
│  │  │         Copy to Clipboard                      │ │  │
│  │  └───────────────────────────────────────────────┘ │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                             │
│  ✓ Text extracted successfu                 │
└────────────────────────────────────────────────────────────┘
```


**3.8.4 Scan Image Interface**

```
┌────────────────────────────────────────────────────────────┐
│  Scan Image for Safety                                      │
│  Check if your image is safe before processing              │
├───────────────────────────────────────────────────────┤
│                                                             │
│  Select Image (PNG, JPG, JPEG, GIF):                       │
│  ┌─────────────────────────────────────────────────────┐  │
│  │  [Choose File]  sample-image.png                     │  │
│  └───────────────────────────────────┘  │
│                                                          │
│  ┌─────────────────────────────────────────────────────┐  │
│  │           [Image Preview]                            │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐  │
│  │              Scan Image                              │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐  │
│  │  ✓ Image is Safe                                     │  │
│  │  File appears safe to proceed                        │  │
│  │                                                       │  │
│  │  Validation Checks:                                  │  │
│  │  ┌───────────────────────────────────────────────┐ │  │
│  │  │  File Size: 2,456.78 KB - Valid              │ │  │
│  │  │  File Type: PNG - Valid                       │ │  │
│  │  │  PNG Signature: Valid                         │ │  │
│  │  └───────────────────────────────────────────────┘ │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                             │
│  ✓ Image is safe to proceed!                               │
└────────────────────────────────────────────────────────────┘
```

---


## CHAPTER 4: IMPLEMENTATION AND CODING

### 4.1 Technology Stack

**Frontend Technologies:**
- **React.js 18.x**: JavaScript library for building user interfaces
- **Axios**: Promise-based HTTP client for API requests
- **HTML5 & CSS3**: Markup and styling
- **JavaScript ES6+**: Modern JavaScript features

**Backend Technologies:**
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **Jimp**: Image processing library for JavaScript
- **Multer**: Middleware formultipart/form-data (file uploads)
- **Crypto (Node.js built-in)**: Cryptographic functionality

**Development Tools:**
- **npm**: Package manager
- **Git**: Version control
- **VS Code**: Code editor
- **Chrome DevTools**: Debugging and testing

### 4.2 Development Methodolproject follows an **Agile development approach** werative development cycles:

**Phase 1: Planning and Design (Week 1-2)**
- Requirements gathering
- System architecture design
- UI/UX mockups
- Technology selection

**Phase 2: Backend Development (Week 3-4)**
- Server setup and configuration
- LSB steganography implementation
- Encryptiondule development
- File handling and validation
- API endpoint creation


**Phase 3: Frontend Development (Week 5-6)**
- React component development
- UI implementation
- Capacity calculator integration
- Form validation
- API integration

**Phase 4: Integration and Testing (Week 7)**
- Frontend-backend integration
- Unit testing
- Integration testing
- Bug fixes
- Performance optimization

**Phase 5: Documentation and Deployment (Week 8)**
- Code documentation
- User guide creation
- Project report writing
- Final testing
- Deployment preparation

### 4.3 Coding Standards

**JavaScript Coding Standards:**

1. **Naming Conventions:**
   - Variables and functions: camelCase (e.g., `hideText`, `imageCapacity`)
   - Constants: UPPER_SNAKE_CASE (e.g., `MAX_FILE_SIZE`)
   - Components: PascalCase (e.g., `HideText`, `ExtractText`)

2. **Code Organization:**
   - One component per file
   - Utility functions in separate modules
   - Clear separation of concerns

3. **Comments:**
   - Function documentation with purpose and parameters
   - Inline comments for complex logic
   - TODO comments for future improvements

4. **Error Handling:**
   - Try-catch blocks for async operations
   - Meaningful error messages
   - Proper error propagation


5. **Code Formatting:**
   - 2-space indentation
   - Semicolons at end of statements
   - Single quotes for strings
   - Consistent bracket placement

6. **Best Practices:**
   - DRY (Don't Repeat Yourself) principle
   - SOLID principles for object-oriented code
   - Modular and reusable code
   - Proper state management in React

### 4.4 Key Modules Implementation

**4.4.1 LSB Steganography Algorithm**

The core algorithm for hiding text in images:

**Hiding Process:**
1. Convert text to binary representation (8 bits per character)
2. Add end delimiter (###END###) to mark message boundary
3. Read image pixel by pixel
4. For each pixel, modify the LSB of R, G, B channels
5. Embed one bit of message in each channel
6. Save modified image as PNG

**Extraction Process:**
1. Read image pixel by pixel
2. Extract LSB from R, G, B channels
3. Accumulate bits into binary string
4. Convert binary to text
5. Stop when end delimiter is found
6. Return extracted message

**4.4.2 AES-256 Encryption Implementation**

**Encryption Process:**
1. Generate random 16-byte salt
2. Derive 256-bit key from password using PBKDF2 (100,000 iterations)
3. Generate random 16-byte IV (Initialization Vector)
4. Encrypt text using AES-256-CBC
5. Combine salt:iv:ciphertext
6. Return encrypted string


**Decryption Process:**
1. Split encrypted string into salt, IV, and ciphertext
2. Derive key from password using same salt
3. Decrypt ciphertext using AES-256-CBC
4. Return plain text

**4.4.3 Capacity Calculator**

**Algorithm:**
1. Load image and get dimensions (width × height)
2. Calculate total bits: width × height × 3 (RGB channels)
3. Convert to characters: total bits ÷ 8
4. Subtract overhead for delimiter and encryption (~100 characters)
5. Dium capacity to user
6. Update progress bar as user types

**4.4.4 File Validation**

**Validation Steps:**
1. Check file size (max 10MB)
2. Verify file extension
3. Read file header bytes
4. Compare with known file signatures:
   - PNG: 89 50 4E 47 0D 0A 1A 0A
   - JPEG: FF D8 FF
   - GIF: 47 49 46 38
5. Return validation result

### 4.5 Screenshots

**Screenshot 1: Hide Text Interface**
- Shows image upload area
- Displays capacity calculator with progress bt input area with character count
- Password field (optional)
- Hide button

**Screenshot 2: Capacity Calculator in Action**
- Image preview displayed
- Real-time capacity information
- Progress bar showing usage percentage
- Status message (green for good,ge for warning, red for error)


**Screenshot 3: Extract Text Interface**
- Image upload with preview
- Password input field
- Extract button
- Extracted text display area
- Copy to clipboard button

**Screenshot 4: Successful Extraction**
- Extracted message displayed
- Succe shown
- Copy button available

**Screenshot 5: Virus Scanner Interface**
- Image upload area
- Scan button
- Validation results display
- File properties and checks

**Screenshot 6: Scan Results**
- Safety status (Safe/Warning)
- Detailed validation checks
- File size, type, and signature verification

---

## CHAPTER 5: TESTING

### 5.1 Testing Strategy

The application was te multiple testing approaches:

**5.1.1 Unit Testing**
- Individual functions tested in isolation
- LSB encoding/decoding functions
- Encryption/decryption functions
- Capacity calculation functions

**5.1.2 Integration Testing**
- Frontend-backend API integration
- File upload and download flow
- End-to-end steganography process

**5.1.3 Functional Testing**
- All features tested against requirements
- User interface interactions
- Error handling scenarios


**5.1.4 Performance Testing**
- Image processing speed
- Large file handling
- Concurrent user simulation

**5.1.5 Security Testing**
- Encryption strength validation
- File validation bypass attempts
- Input sanitization testing

**5.1.6 Usability Testing**
- User interface intuitiveness
- Error message clarity
- Overall user experience

### 5.2 Test Cases

**Test Case 1: Hide Text in PNG Image**
- **Input**: PNG image (1920×1080), text (100 characters), no password
- **Expected Output**: Modified PNG image with hidden text
- **Result**: PASS - Text successfully hidden, image downloaded

**Test Case 2: Hide Text with Password**
- **Input**: PNG image, text (200 characters), password "test123"
- **Expected Output**: Encrypted and hidden text in image
- **Result**: PASS - Text encrypted and hidden successfully

**Test Case 3: Extract Text without Password**
- **Input**: Image with hidden text (no encryption)
- **Expected Output**: Original text extracted
- **Result**: PASS - Text extracted correctly

**Test Case 4: Extract Text with Correct Password**
- **Input**: Image with encrypted text, correct password
- **Expected Output**: Decrypted text displayed
- **Result**: PASS - Text decrypted and extracted successfully

**Test Case 5: Extract Text with Wrong Password**
- **Input**: Image with encrypted text, wrong password
- **Expected Output* message "Wrong password"
- **Result**: PASS - Appropriate error message displayed


**Test Case 6: Capacity Calculator**
- **Input**: Image (800×600 pixels)
- **Expected Output**: Maximum capacity = 179,900 characters
- **Result**: PASS - Correct capacity calculated and displayed

**Test Case 7: Text Exceeds Capacity**
- **Input**: Small image, text exceeding capacity
- **Expected Output**: Error message, button disabled
- **Result**: PASS - User prevented from hiding oversized text

**Test Case 8: File Validation - Valid PNG**
- **Input**: Valid PNG image
- **Expected Output**: "File appears safe to proceed"
- **Result**: PASS - Validation successful

**Test Case 9: File Validation - Invalid File**
- **Input**: Text file renamed to .png
- **Expected Output**: "File validation failed"
- **Result**: PASS - Invalid file detected

**Test Case 10: Multi-Format Support**
- **Input**: JPG, JPEG, GIF images
- **Expected Output**: All formats processed successfully
- **Result**: PASS - All formats supported

**Test Case 11: Large File Handling**
- **Input**: 9MB PNG image
- **Expected Output**: Processed within 5 seconds
- **Result**: PASS - Processed in 3.2 seconds

**Test Case 12: File Size Limit**
- **Input**: 15MB image (exceeds 10MB limit)
- **Expected Output**: Error message "File too large"
- **Result**: PASS - File rejected with appropriate message

**Test Case 13: Empty Text Input**
- **Input**: Image selected, no text entered
- **Expected Output**: Button disabled, validation message
- **Result**: PASS - User prevented from submitting empty text


**Test Case 14: Special Characters in Text**
- **Input**: Text with special characters (!@#$%^&*)
- **Expected Output**: All characters preserved correctly
- **Result**: PASS - Special characters handled properly

**Test Case 15: Unicode Characters**
- **Input**: Text with emojis and Unicode characters
- **Expected Output**: Characters preserved in extraction
- **Result**: PASS - Unicode support working

### 5.3 Test Results Summary

| Test Category | Total Tests | Passed | Failed | Pass Rate |
|--------------|-------------|--------|--------|-----------|
| Functional   | 10          | 10     | 0      | 100%      |
| Security     | 3           | 3      | 0      | 100%      |
| Performance  | 2           | 2      | 0      | 100%      |
| **Total**    | **15**      | **15** | **0**  | **100%**  |

**Key Findings:**
- All functional requirements met successfully
- Encryption and decryption working correctly
- File validation preventing invalid inputs
- Performance within acceptable limits
- User interface intuitive and responsive
- Error handling comprehensive and user-friendly

---


## CHAPTER 6: CONCLUSION AND FUTURE SCOPE

### 6.1 Conclusion

This project successfully developed a comprehensive web-based steganography application that combines LSB (Least Significant Bit) steganography with AES-256 encryption to provide dual-layer security for secret communication.

**Key Achievements:**

1. **Successful Implementation**: All planned features were successfully implemented and tested, including hide text, extract text, and virus scanning capabilities.

2. **Dual-Layer Security**: The application provides both steganography (hiding data) and cryptography (encrypting data), offering robust security for sensitive information.

3. **User-Friendly Interface**: The clean, modern interface with real-time feedback makes the application accessible to users without technical expertise.

4. **Multi-Format Support**: Support for PNG, JPG, JPEG, and GIF formats makes the application versatile and practical for various use cases.

5. **Capacity Calculator**: The real-time capacity calculator with visual progress bars significantly improves user experience by preventing errors before they occur.

6. **Security Best Practices**: Implementation of AES-256 encryption with PBKDF2 key derivation demonstrates adherence to industry-standard security practices.

7. **Privacy-Focused**: No permanent storage of user data ensures complete privacy and security.


**Project Objectives Met:**

✓ Developed a functional web-based steganogra✓ Implemented LSB steganography algorithm
✓ Integrated AES-256 encryption for password protection
✓ Added support for multiple image formats
✓ Created real-time capacity calculator
✓ Implemented file validation and safety checks
✓ Designed intuitive user interface
✓ Achieved all functional and non-functional requirements

The project demonstrates practical application ormation security concepts, including steganography, cryptography, software developmenices. It serves as both a functional tool for secure communication and an educational resource for understanding these security techniques.

### 6.2 Limitations

While the project successfully meets its objectives, certain limitations exist:

**Technical Limitations:**

1. **JPEG Compression**: JPEG's lossy compression can destroy hidden data if the image is re-saved, limiting reliability for this format.

2. **File Size Limit**: Current implementation limits uploads to 10MB, which may be restrictive for high-resolut.

3. **Browser Dependency**: Requires modern browser with JavaScript enabled; no offline functionality.

4. **Processing Speed**: Large images may take several seconds to process, though within acceptable limits.

5. **LSB Vulnerability**: LSB steganography can be detected by statistical analysis tools, though encryption adds protection.


**Functional Limitations:**

6. **Text-Only**: Currently supports only text messages, not other file types (PDFs, documents, etc.).

7. **Single Message**: Can hide only one message per image; no multi-layer steganography.

8. **No Message History**: No storage or history of previous operations.

9. **Basic Virus Scanning**: File validation is basic; doesn't integrate with comprehensive antivirus engines.

10. **No User Authentication**: No user accounts or authentication system.

**Deployment Limitations:**

11. **Scalability**: Not optimized for high-traffic production deployment.

12. **No Database**: Lack of database limits features like user preferences or message tracking.

### 6.3 Future Enhancements

Tng enhancements could be implemented to extend the application's capabilities:

**Security Enhancements:**

1. **Advanced Steganography Techniques**
   - Implement DCT (Discrete Cosine Transform) based steganography
   - Add spread spectrum techniques for betcurity
   - Support for multi-layer steganography (hiding multiple messages)

2. **Enhanced Encryption**
   - Support for multiple encryption algorithms (RSA, ECC)
   - Public-key cryptography for secure key exchange
   - Digital signatures for message authentication

3. **Steganography Detection**
   - Implement steganalysis tools to detect hidden data
   - Statistical analysis features
   - Visual heatmaps showing modified pixels


**Feature Enhancements:**

4. **File Hiding**
   - Support hiding any file type (PDFs, ZIPs, images)
   - Compress files before hiding to maximize capacity
   - Multiple file support

5. **Batch Processing**
   - Hide same message in multiple images simultaneously
   - Bulk extraction from multiple images
   - ZIP file download for batch operations

6. **Advanced UI Features**
   - Drag-and-drop file upload
   - Side-by-side image comparison (before/after)
   - Dark mode theme
   - Mobile-responsive design improvements

7. **User Management**
   - User authentication and accounts
   - Message history and management
   - Saved preferences and settings
   - Secure cloud storage option

8. **Communication Features**
   - Direct image sharing via email
   - QR code generation for easy sharing
   - Temporary shareable links with expiry
   - Integration with messaging platforms

**Technical Enhancements:**

9. **Performance Optimization**
   - Client-side image processing using Web Workers
   - Progressive image loading
   - Caching mechanisms
   - CDN integration for faster delivery

10. **Advanced Validation**
    - Integration with VirusTotal API
    - ClamAV antivirus integration
    - Machine learning-based malware detection


11. **Database Integration**
    - MongoDB or PostgreSQL for data persistence
 references storage
    - Analytics and usage statistics
    - Audit logs for security

12. **API Development**
    - RESTful API for third-party integration
    - API documentation (Swagger/OpenAPI)
    - Rate limiting and authentication
    - Webhook support

**Deployment Enhancements:**

13. **Production Deployment**
    - Docker containerization
    - Kubernetes orchestration
    - Load balancing for scalability
    - CI/CD pipeline setup

14. **Monitoring and Analytics**
    - Application performance monitoring
    - Error tracking and logging
    - User analytics
    - Security monitoring

**Educational Features:**

15. **Learning Mode**
    - Step-by-step visualization of steganography process
    - Interactive tutorials
    - Explanation of encryption algorithms
    - Security best practices guide

16. **Research Applications**
    - Support for research papers and citations
    - Benchmark testing tools
    - Algorithm comparison features
    - Export results for analysis

These enhancements would transform the application from a functional tool into a comprehensive steganography platform suitable for both casual users and security professionals.

---


## REFERENCES

1. **Books:**
   - Wayner, P. (2009). *Disappearing Cryptography: Information Hiding: Steganography & Watermarking*. Morgan Kaufmann.
   - Stallings, W. (2017). *Cryptography and Network Security: Principles and Practice*. Pearson.
   - Johnson, N. F., & Jajodia, S. (1998). *Exploring Steganography: Seeing the Unseen*. IEEE Computer.

2. **Research Papers:**
   - Cheddad, A., Condell, J., Curran, K., & Mc Kevitt, P. (2010). Digital image steganography: Survey and analysis of current methods. *Signal Processing*, 90(3), 727-752.
   - Provos, N., & Honeyman, P. (2003). Hide and seek: An introduction to steganography. *IEEE Security & Privacy*, 1(3), 32-44.

3. **Web Resources:**
   - Mozilla Developer Network (MDN). (2023). *Web APIs*. https://developer.mozilla.org/
   - Node.js Documentation. (2023). *Node.js v18.x Documentation*. https://nodejs.org/docs/
   - React Documentation. (2023). *React - A JavaScript library for building user interfaces*. https://react.dev/

4. **Technical Documentation:**
   - NIST. (2001). *Advanced Encryption Standard (AES)*. FIPS PUB 197.
   - RFC 2898. (2000). *PKCS #5: Password-Based Cryptography Specification Version 2.0*.

5. **Libraries and Frameworks:**
   - Jimp Documentation. https://github.com/jimp-dev/jimp
   - Express.js Documentation. https://expressjs.com/
   - Multer Documentation. https://github.com/expressjs/multer

---


## APPENDIX A: CODE SNIPPETS

### A.1 LSB Steganography - Hide Text Function

```javascript
async function hideText(inputPath, outputPatext, password = null) {
  // Encrypt text rd is provided
  let messageToHide = text;
  if (password) {
    messageToHide = encryptText(text, password);
  }
  
  const message = messageToHide + '###END###';
  const binaryMessage = textToBinary(message);
  
  const image = await Jimp.read(inputPath);
  const maxCapacity = image.bitmap.width * image.bitmap.height * 3;
  
  if (binaryMessage.length > maxCapacity) {
    throw new Error('Text is too long for this image');
  }

  let messageIndex = 0;
  
  // Hide the message in the image
  for (let y = 0; y < image.bitmap.height && messageIndex < binaryMessage.length; y++) {
    for (let x = 0; x < image.bitmap.width && messageIndex < binaryMessage.length; x++) {
      const idx = (image.bitmap.width * y + x) << 2;
      
      // Modify LSB of R, G, B channels
      for (let i = 0; i < 3 && messageIndex < binaryMessage.length; i++) {
        const bit = parseInt(binaryMessage[messageIndex]);
        image.bitmap.data[idx + i] = (image.bitmap.data[idx + i] & 0xFE) | bit;
        messageIndex++;
      }
    }
  }

  await image.writeAsync(outputPath);
  return { success: true };
}
```


### A.2 AES-256 Encryption Function

```javascript
function encryptText(text, password) {
  // Generate random salt and IV
  const salt = crypto.randomBytes(16);
  const iv = crypto.randomBytes(16);
  
  // Derive key from password using PBKDF2
  const key = crypto.pbkdf2Sync(password, salt, 100000, 32, 'sha256');
  
  // Create cipher
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  
  // Encrypt the text
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  // Combt + iv + encrypted data
 sult = salt.toString('hex') + ':' + iv.toString('hex') + ':' + encrypted;
  
  return result;
}
```

### A.3 Capacity Calculator Function

```javascript
const calculateCapacity = (img) => {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
      // Each pixel has RGB channels, each can store 1 bit
      const totalBit image.width * image.height * 3;
      // Convert to characters (8 bits per character)
      const maxChars = Math.floor(totalBits / 8) - 100; // 100 char overhead
      resolve({
     th: image.width,
        height: image.height,
        totalBits: totalBits,
        maxChars: maxChars
      });
    };
    image.src = URL.createObjectURL(img);
  });
};
```


### A.4 File Validation Function

```javascript
async function scanFile(filePath) {
  const stats = fs.statSync(filePath);
  const extension = getFileExtension(filePath);
  
  const checks = {
    fileExists: true,
    fileSize: stats.size,
    fileSizeOk: stats.size > 0 && stats.size < 10 * 1024 * 1024,
    fileType: extension,
    isValidImageType: ['png', 'jpg', 'jpeg', 'gif'].includes(extension)
  };

  // Read file header to verify signature
  let validSignature = false;
  if (FILE_SIGNATURES[extension]) {
    const sigInfo = FILE_SIGNATURES[extension];
    const buffer = Buffer.alloc(sigInfo.length);
    const fd = fs.openSync(filePath, 'r');
    fs.readSync(fd, buffer, 0, sigInfo.length, 0);
    fs.closeSync(fd);
    
    validSignature = buffer.equals(sigInfo.signature);
  }
  
  checks.validSignature = validSignature;

  const isSafe = checks.fileSizeOk && checks.isValidImageType && checks.validSignature;

  return {
    safe: isSafe,
    message: isSafe ? 'File appears safe to proceed' : 'File lidation failed',
    checks: checks
  };
}
``

## APPENDIX B: INSTALLATION AND SETUP GUIDE

### B.1 Prerequisites

- Node.js (v14.x or higher)
- npm or yarn package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Git (for version control)


### B.2 Installation Steps

**Step 1: Clone or Download the Project**
```bash
git clone <repository-url>
cd steganography-app
```

**Step 2: Install Dependencies**
```bash
# Install all dependencies (both client and server)
npm run install-all

# Or install separately
cd server && npm install
cd ../client && npm install
```

**Step 3: Start the Backend Server**
```bash
cd server
npm start
# Server will run on http://localhost:5000
```

**Step 4: Start the Frontend Application**
```bash
cd client
npm start
# Application will open at http://localhost:3000
```

### B.3 Project Structure

```
steganography-app/
├── client/                    # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── HideText.js
│   │   │   ├── ExtractText.js
│   │   │   ├── VirusScanner.js
│   │   │   └── Components.css
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── server/                    # Node.js backend
│   ├── routes/
│   │   └── steganography.js
│   ├── utils/
│   │   ├── lsb.js
│   │   ├── encryption.js
│   │   └── virusScanner.js
│   ├── uploads/              # Temporary storage
│   ├── server.js
│   └── package.json
├── README.md
├── .gitignore
└── package.json
```

---

ND OF REPORT**

