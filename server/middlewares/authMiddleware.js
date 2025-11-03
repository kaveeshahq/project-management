export const protect = async (req, res, next) => {
    try {
        const {userId} =  req.auth();

        if(!userId) {
            return res.status(401).json({message : "Unauthorized"})
        }

         next() ;
    } catch (error) {
        console.log(error);
        return res.status(500).json({message : error.code || "Internal Server Error"})
        
    }
}