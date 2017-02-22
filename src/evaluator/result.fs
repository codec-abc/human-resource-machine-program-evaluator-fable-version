namespace ResultF

module ResultF =

    type ResultF<'a,'b> =
        | OkF of 'a
        | ErrorF of 'b
        
    
    let bind f (result : ResultF<'a,'b>) =
        match result with
            | OkF a -> 
                let application = f(a)
                match application with
                    | OkF c -> OkF c
                    | ErrorF d -> ErrorF d
            | ErrorF b -> ErrorF b