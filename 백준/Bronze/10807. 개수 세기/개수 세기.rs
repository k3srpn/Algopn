use std::io;

fn main() {
    let mut _n = String::new();
    io::stdin().read_line(&mut _n).expect("Error");
    let _n: u32 = match _n.trim().parse() {
        Ok(_n) => _n,
        Err(_) => 0,
    };

    let mut enum_string = String::new();
    io::stdin().read_line(&mut enum_string).expect("Errororor");
    let strings: Vec<&str> = enum_string.split_whitespace().collect();

    let mut compare_string = String::new();
    io::stdin().read_line(&mut compare_string).expect("hi");

    let compare_number = match compare_string.trim().parse() {
        Ok(compare_string) => compare_string,
        Err(_) => 0,
    };

    let mut count = 0;
    for string in strings {
        let parse_number = string.parse::<i32>().expect("dd");
        if parse_number == compare_number {
            count = count + 1;
        }
    }
    println!("{}", count)
}
