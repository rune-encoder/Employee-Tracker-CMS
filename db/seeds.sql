INSERT INTO department (name)
VALUES ("Service"),
       ("Sales"),
       ("Parts"),
       ("Finance"),
       ("Customer Service"),
       ("Accounting"),
       ("Human Resources");

INSERT INTO role (department_id, title, salary)
VALUES (1, "Service Director", 96000),
       (1, "Service Manager", 84000),
       (1, "Service Consultant", 45000),
       (1, "Technician", 59804 ),
       (1, "Express Technician", 29400),
       (1, "Service Porter", 24000),
       (1, "Warranty Admin", 45000),
       (2, "General Manager", 123000),
       (2, "Sales Manager", 82304),
       (2, "Used Car Sales Manager", 67854),
       (2, "Sales Professional", 59043),
       (2, "Sales Porter", 23685),
       (3, "Parts Manager", 78958),
       (3, "Parts Specialist", 65784),
       (3, "Parts Warehouse Associate", 34854),
       (3, "Parts Delivery Driver", 29586),
       (4, "Finance Manager", 86094),
       (5, "Remote Customer Service", 50000),
       (6, "Accounts Payable Clerk", 56443),
       (6, "Accounts Receivable Clerk", 57443),
       (6, "Accounting Payroll Admin", 55743),
       (6, "Billing Inventory Clerk", 62343),
       (7, "Human Resources Manager", 69045);
  
INSERT INTO employee (role_id, first_name, last_name, manager_id)
VALUES (1, "Clementine", "Moon", NULL),
       (2, "Nova", "Mueller", 1),
       (3, "Imani", "Ball", 2),
       (3, "Shane", "Mays", 2),
       (3, "Denisse", "Hanson", 2),
       (3, "Khalil", "Melton", 2),
       (3, "Kamiyah", "Grimes", 2),
       (3, "Harlan", "Robles", 2),
       (3, "Felicity", "Little", 2),
       (4, "Lennox", "Brock", 2),
       (4, "Elliott", "Nolan", 2),
       (4, "Dante", "Rubio", 2),
       (4, "Paisley", "Hanna", 2),
       (4, "Louie", "Reyna", 2),
       (4, "Juliet", "Clay", 2),
       (4, "Tommy", "Mann", 2),
       (4, "Malaya", "Powell", 2),
       (4, "Bryant", "Horn", 2),
       (4, "Clay", "Castillo", 2),
       (5, "Bjorn", "Ironside", 2),
       (5, "Ragnar", "Lothbrok", 2),
       (5, "Mario", "Kart", 2),
       (5, "Link", "Headerson", 2),
       (6, "Saul", "Baldwin", 2),
       (6, "Ivar", "The Boneless", 2),
       (6, "Rollo", "Lothbrok", 2),
       (7, "Harald", "Finehair", 2),
       (7, "Kjetill", "Flatnose", 2),
       (7, "Eivor", "Varinsson", 2),
       (8, "Sigurd", "Styrbjornson", NULL),
       (9, "Edward", "Kenway", 30),
       (10, "Basim", "Ishaq", 30),
       (11, "Westley", "Moyer", 31),
       (11, "Shepard", "Drake", 31),
       (11, "Madilyn", "Barajas", 31),
       (11, "Drew", "Moreno", 31),
       (11, "Joey", "Conrad", 31),
       (11, "Sienna", "Walton", 31),
       (11, "Collins", "Callahan", 31),
       (11, "Chandler", "Franklin", 31),
       (11, "Annie", "Delacruz", 31),
       (11, "Marco", "Bautista", 31),
       (11, "Katia", "Maxwell", 31),
       (12, "Karla", "Meyers", 31),
       (12, "Ruben", "Webster", 31),
       (13, "Jana", "Greene", 30),
       (14, "Katie", "Dodson", 46),
       (14, "Wolf", "Donaldson", 46),
       (14, "Dennis", "Duarte", 46),
       (14, "Justin", "Frost", 46),
       (14, "Remy", "Kane", 46),
       (15, "Paul", "Charles", 46),
       (16, "Zayn", "Drake", 46),
       (17, "Clark", "Juarez", 30),
       (17, "Cynthia", "Russo", 30),
       (17, "Alanna", "Knox", 30),
       (18, "Brian", "Moore", 1),
       (18, "Kaison", "Stevenson", 1),
       (18, "Miguel", "Hickman", 1),
       (18, "Kalel", "Winters", 1),
       (18, "Jada", "Bravo", 1),
       (18, "Bishop", "Davila", 1),
       (18, "Ledger", "Hutchinson", 1),
       (18, "Chris", "Soto", 1),
       (18, "Adele", "Arellano", 1),
       (18, "Alex", "Day", 1),
       (19, "Tucker", "Kane", 30),
       (20, "Layne", "Stuart", 30),
       (21, "Miguel", "Miller", 30),
       (22, "Zayn", "Gutierrez", 30),
       (23, "Kellen", "Xiong", NULL);

       SELECT * FROM department;
       SELECT * FROM role;
       SELECT * FROM employee;