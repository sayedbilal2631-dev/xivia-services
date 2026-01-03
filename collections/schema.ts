type Hero = {
    header: string
    title: string
    subtitle: string
    logo:string // web app logo
    apptitle:string 
}

interface Services {
    icon: string //url to the logo or image : we can use manual for now
    title: string
    text: string
    key: string // for mmatching logos until we can upload ours dynamic
}


interface Projects {
    name: string //project name
    type: string // which type of project is
    description: string// little details about the project
    appType: "Mobile" | "Web-App"
    siteUrl: string
    coverImage: string // url to the image : we can use manual for now
    key: string // for mmatching logos until we can upload ours dynamic
}

interface Reviews {
    userName: string
    rating: number //out of 5
    comment: string
    profileImage: string // same logic as above
}

interface Team {
    profileImage: string // same logic as above
    fullName: string
    role: string
    responsibility: string
    socials: Socials[]
}

type Socials = {
    type: "Facebook" | "Twitter" | "Github" | "Linkdin" | "Insatgram"
    url: string
}

interface ContactDetails {
    location: string
    phoneNo: string
    email: string
}