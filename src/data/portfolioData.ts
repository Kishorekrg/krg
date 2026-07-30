export interface Project {
  id: string;
  title: string;
  category: string;
  shortOverview: string;
  fullDescription: string;
  keyFeatures: string[];
  technologies: string[];
  githubUrl: string;
  image: string;
  architectureDetails: {
    nodes: string[];
    topics: string[];
    simulationEnv: string;
    hardwareTarget: string;
  };
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; tag?: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  coursework: string[];
  highlights: string[];
}

export interface ActivityItem {
  title: string;
  events: string[];
  description: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Kishore Ram G",
    heroTitles: [
      "Robotics Engineer",
      "ROS 2 Developer",
      "Robotics Software Engineer"
    ],
    heroBio: "Final-year Robotics and Automation Engineering student passionate about autonomous robotics, robotics software, and defence technologies. I enjoy building intelligent robotic systems using ROS 2, simulation, computer vision, and autonomous navigation while continuously learning modern robotics software engineering.",
    email: "kishore26ram@gmail.com",
    phone: "+91 78068 14684",
    location: "Tamil Nadu, India",
    github: "https://github.com/Kishorekrg",
    linkedin: "https://linkedin.com/in/kishore-ram-g-4534082b8",
    resumeUrl: "/resume.pdf",
    profileImage: "/images/profile.jpg"
  },
  
  about: {
    heading: "About",
    paragraph: "I am a final-year B.E. Robotics and Automation Engineering student with a deep passion for robotics, autonomous systems, and the defence sector.\n\nI enjoy designing robotic systems from simulation to software development using ROS 2.",
    interests: [
      "Autonomous Mobile Robots",
      "Robot Navigation",
      "SLAM",
      "Robot Modeling",
      "Computer Vision",
      "Multi-Robot Systems",
      "Defence Robotics",
      "Industrial Automation"
    ]
  },

  education: {
    degree: "B.E Robotics and Automation Engineering",
    institution: "Anna University",
    graduation: "Expected Graduation 2027",
    coursework: [
      "Robot Kinematics",
      "Robot Dynamics",
      "Robot Path Planning",
      "Control Systems",
      "Embedded Systems",
      "Sensors and Instrumentation",
      "Electric Drives and Actuators",
      "Industrial Automation",
      "Machine Vision",
      "Autonomous Mobile Robots",
      "Mechatronics",
      "Artificial Intelligence for Robotics"
    ]
  },

  skillCategories: [
    {
      title: "Robotics",
      iconName: "Cpu",
      skills: [
        { name: "ROS 2 Jazzy" },
        { name: "Nav2 Stack" },
        { name: "SLAM Toolbox" },
        { name: "AMCL Localization" },
        { name: "Behavior Trees" },
        { name: "Robot Navigation" },
        { name: "TF2" },
        { name: "URDF" },
        { name: "Xacro" },
        { name: "Robot Modeling" },
        { name: "Robot State Publisher" },
        { name: "Sensor Integration" },
        { name: "Mobile Robotics" }
      ]
    },
    {
      title: "Simulation",
      iconName: "Box",
      skills: [
        { name: "Gazebo Harmonic" },
        { name: "RViz2" },
        { name: "RQt" },
        { name: "Robot Simulation" },
        { name: "Mapping" },
        { name: "Navigation Testing" }
      ]
    },
    {
      title: "Computer Vision",
      iconName: "Eye",
      skills: [
        { name: "OpenCV" },
        { name: "ArUco Marker Detection" },
        { name: "MediaPipe" },
        { name: "Camera Calibration" },
        { name: "Image Processing" }
      ]
    },
    {
      title: "Programming",
      iconName: "Code",
      skills: [
        { name: "Python" },
        { name: "C++" },
        { name: "ROS 2 Packages" },
        { name: "Launch Files" },
        { name: "YAML Configuration" },
        { name: "XML (URDF/Xacro)" }
      ]
    },
    {
      title: "Design & Tools",
      iconName: "Terminal",
      skills: [
        { name: "Fusion 360" },
        { name: "Ubuntu Linux" },
        { name: "Git" },
        { name: "GitHub" },
        { name: "VS Code" }
      ]
    }
  ] as SkillCategory[],

  experience: [
    {
      id: "ros2-program",
      role: "ROS 2 Industrial Uplifting Program",
      company: "KKR PVT LTD",
      location: "Chennai",
      period: "20 Days",
      description: [
        "20 days ROS2 industria uplifting program from KKR PVT LTD. where i can learn ros2 jazzy basic to some advanded topic and i build mulitple or 4+ projects in 20days i have a hand on exprience in gazebo harmoni rviz2 slam toolbox nav2 etc"
      ],
      technologies: ["ROS 2 Jazzy", "Nav2", "Gazebo Sim", "SLAM Toolbox", "Python", "URDF"]
    },
    {
      id: "automation-internship",
      role: "Industrial Automation Internship",
      company: "Saravana Electronics",
      location: "Rajapalayam",
      period: "15 Days",
      description: [
        "Worked with industrial automation systems including PLCs, HMIs, ladder logic programming, industrial control panels, sensors, and automation hardware.",
        "Visited multiple manufacturing industries to understand real-world PLC-based automation systems and industrial workflows."
      ],
      technologies: ["PLCs", "HMIs", "Ladder Logic", "Control Panels", "Sensors", "Industrial Hardware"]
    },
    {
      id: "drone-internship",
      role: "Drone Technology Internship",
      company: "NSIC Technical Services Centre",
      location: "Chennai",
      period: "7 Days",
      description: [
        "Learned drone fundamentals, electronics, flight control concepts, calibration procedures, and assembled a complete agricultural drone while understanding UAV architecture and components."
      ],
      technologies: ["UAV Architecture", "Flight Control", "Drone Electronics", "Calibration", "Sensors"]
    }
  ] as ExperienceItem[],

  roboticsActivities: {
    title: "Hands-on Robotics Experience",
    events: ["Robo War", "Robo Soccer", "Robo Race", "Robo Sumo"],
    description: "Participating in robotics competitions strengthened my understanding of robot design, electronics, fabrication, mechanical systems, motor selection, power distribution, control systems, and rapid problem-solving under competitive conditions."
  },

  certifications: [
    {
      title: 'ROS 2 Industrial Uplifting Certification',
      issuer: 'Karthikesh Robotics',
      date: '2026'
    },
    {
      title: 'Industrial Automation & PLC Systems',
      issuer: 'Saravana Electronics',
      date: '2025'
    },
    {
      title: 'UAV Architecture & Drone Technology',
      issuer: 'NSIC Technical Services Centre',
      date: '2025'
    }
  ],

  projects: [
    {
      id: "autonomous-navigation",
      title: "Autonomous Navigation Robot",
      category: "Autonomous Mobile Robotics & SLAM",
      shortOverview: "Designed and simulated an autonomous mobile robot capable of localization, global path planning, obstacle avoidance, and autonomous navigation inside custom environments using the ROS 2 Navigation Stack.",
      fullDescription: "Designed and simulated an autonomous mobile robot capable of localization, global path planning, obstacle avoidance, and autonomous navigation inside custom environments using the ROS 2 Navigation Stack.",
      keyFeatures: [
        "SLAM Toolbox mapping & AMCL Monte Carlo localization",
        "Nav2 costmaps and Behavior Trees execution",
        "Gazebo Harmonic indoor environment simulation",
        "RViz2 path visualizer & TF2 tree transform publisher"
      ],
      technologies: ["ROS 2 Jazzy", "Nav2", "Gazebo Harmonic", "RViz2", "SLAM Toolbox", "AMCL", "Behavior Trees", "Python"],
      githubUrl: "https://github.com/Kishorekrg/Autonomous-Obstacle-Avoiding-Bot",
      image: "/images/nav2.png",
      architectureDetails: {
        nodes: ["amcl", "controller_server", "planner_server", "bt_navigator", "slam_toolbox"],
        topics: ["/scan", "/map", "/amcl_pose", "/cmd_vel", "/plan"],
        simulationEnv: "Gazebo Harmonic (SDF Indoor World)",
        hardwareTarget: "Simulated Differential Drive Mobile Robot"
      }
    },
    {
      id: "gesture-controlled",
      title: "Gesture Controlled Robot",
      category: "Computer Vision & Human-Robot Interaction",
      shortOverview: "Developed a vision-based robot control system where real-time hand gestures are detected using MediaPipe and translated into robot movement commands through ROS 2 communication.",
      fullDescription: "Developed a vision-based robot control system where real-time hand gestures are detected using MediaPipe and translated into robot movement commands through ROS 2 communication.",
      keyFeatures: [
        "Real-time MediaPipe hand landmark detection at 30 FPS",
        "OpenCV image processing and gesture interpretation",
        "ROS 2 cmd_vel command node mapping gestures to motion",
        "Gazebo Harmonic robot simulation verification"
      ],
      technologies: ["ROS 2 Jazzy", "Gazebo Harmonic", "MediaPipe", "OpenCV", "Python", "RViz2"],
      githubUrl: "https://github.com/Kishorekrg/Gesture-Control-Bot-",
      image: "/images/gesture.png",
      architectureDetails: {
        nodes: ["gesture_control_node", "hand_landmarker", "cmd_vel_publisher"],
        topics: ["/camera/image_raw", "/cmd_vel", "/hand_skeleton"],
        simulationEnv: "Gazebo Sim / Webcam Stream",
        hardwareTarget: "Differential Drive AMR"
      }
    },
    {
      id: "obstacle-avoidance",
      title: "Autonomous Obstacle Avoidance Robot",
      category: "Sensor Fusion & Mobile Robotics",
      shortOverview: "Built an autonomous robot capable of detecting obstacles using LiDAR and camera sensors, processing environmental information, and safely navigating around obstacles inside simulation.",
      fullDescription: "Built an autonomous robot capable of detecting obstacles using LiDAR and camera sensors, processing environmental information, and safely navigating around obstacles inside simulation.",
      keyFeatures: [
        "2D LiDAR scanner raycasting & camera perception",
        "Real-time barrier and wall detection algorithm",
        "Autonomous steering corrections and collision avoidance",
        "RViz2 sensor visualization and odometry inspection"
      ],
      technologies: ["ROS 2 Jazzy", "Gazebo", "LiDAR", "Camera", "Python", "RViz2"],
      githubUrl: "https://github.com/Kishorekrg/Autonomous-Obstacle-Avoiding-Bot",
      image: "/images/obstacle_avoiding.png",
      architectureDetails: {
        nodes: ["obstacle_detector_node", "laser_scan_filter", "safety_controller"],
        topics: ["/scan", "/camera/image_raw", "/cmd_vel"],
        simulationEnv: "Gazebo Obstacle World",
        hardwareTarget: "LiDAR-equipped Mobile Robot"
      }
    },
    {
      id: "leader-follower",
      title: "Leader-Follower Robot",
      category: "Multi-Robot Systems & Vision Tracking",
      shortOverview: "Developed a multi-robot leader–follower system where the follower robot detects and tracks an ArUco marker mounted on the leader while maintaining safe movement using vision-based tracking and autonomous obstacle avoidance.",
      fullDescription: "Developed a multi-robot leader–follower system where the follower robot detects and tracks an ArUco marker mounted on the leader while maintaining safe movement using vision-based tracking and autonomous obstacle avoidance.",
      keyFeatures: [
        "OpenCV ArUco marker pose detection & distance tracking",
        "Leader bot path generation and obstacle avoidance",
        "Follower bot closed-loop distance control node",
        "Multi-robot URDF/Xacro models in Gazebo Harmonic"
      ],
      technologies: ["ROS 2 Jazzy", "Gazebo Harmonic", "OpenCV", "ArUco Marker", "LiDAR", "Camera", "URDF", "Xacro", "Python"],
      githubUrl: "https://github.com/Kishorekrg/Leader-Follower-Bot-ArUco-Marker-",
      image: "/images/leader_follower.png",
      architectureDetails: {
        nodes: ["aruco_detector_node", "leader_teleop", "follower_controller"],
        topics: ["/leader/scan", "/follower/camera/image_raw", "/follower/cmd_vel"],
        simulationEnv: "Gazebo Harmonic Multi-Robot World",
        hardwareTarget: "Dual Mobile Robot Platform"
      }
    },
    {
      id: "line-follower",
      title: "Camera Based Line Following Robot",
      category: "Computer Vision & Autonomous Guidance",
      shortOverview: "Designed a camera-based autonomous line-following robot that processes real-time camera images, detects lane position, computes steering corrections, and follows the path using ROS 2 control nodes.",
      fullDescription: "Designed a camera-based autonomous line-following robot that processes real-time camera images, detects lane position, computes steering corrections, and follows the path using ROS 2 control nodes.",
      keyFeatures: [
        "HSV thresholding and lane position tracking",
        "Centroid displacement error feedback loop",
        "ROS 2 diff-drive motor velocity controller",
        "URDF model verified in Gazebo Harmonic track world"
      ],
      technologies: ["ROS 2 Jazzy", "Gazebo Harmonic", "OpenCV", "Python", "URDF", "RViz2"],
      githubUrl: "https://github.com/Kishorekrg/Camera-Based-Line-Follower",
      image: "/images/linefollower.png",
      architectureDetails: {
        nodes: ["camera_line_detector", "steering_controller", "robot_state_publisher"],
        topics: ["/camera/image_raw", "/line/centroid", "/cmd_vel"],
        simulationEnv: "Gazebo Harmonic Line Track",
        hardwareTarget: "Diff Drive Vision Bot"
      }
    }
  ] as Project[],

  github: {
    username: "Kishorekrg",
    profileUrl: "https://github.com/Kishorekrg",
    publicRepos: 5,
    featuredRepos: [
      {
        name: "Leader-Follower-Bot-ArUco-Marker-",
        description: "Multi-robot leader-follower system with LiDAR obstacle avoidance & ArUco tracking in ROS 2 Jazzy.",
        language: "Python",
        stars: 12,
        forks: 4,
        url: "https://github.com/Kishorekrg/Leader-Follower-Bot-ArUco-Marker-"
      },
      {
        name: "Gesture-Control-Bot-",
        description: "Hand-gesture controlled mobile robot using MediaPipe hand landmark detection & ROS 2 cmd_vel.",
        language: "Python",
        stars: 9,
        forks: 3,
        url: "https://github.com/Kishorekrg/Gesture-Control-Bot-"
      },
      {
        name: "Autonomous-Obstacle-Avoiding-Bot",
        description: "Autonomous mobile robot fusing LiDAR scanner and camera data for reactive navigation in Gazebo.",
        language: "Python",
        stars: 8,
        forks: 2,
        url: "https://github.com/Kishorekrg/Autonomous-Obstacle-Avoiding-Bot"
      },
      {
        name: "Camera-Based-Line-Follower",
        description: "Autonomous line follower bot with OpenCV camera vision pipeline and centroid steering in URDF.",
        language: "Python",
        stars: 7,
        forks: 2,
        url: "https://github.com/Kishorekrg/Camera-Based-Line-Follower"
      }
    ]
  }
};

