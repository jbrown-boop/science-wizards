// SCIENCE WIZARDS RPG - COMPLETE QUESTION DATABASE (825+ Questions)
// IGCSE-aligned curriculum coverage for all subjects
// Difficulty Distribution: 40% Easy, 45% Medium, 15% Hard

const questionBank = {
    physics: {
        mechanics: [
            // EASY QUESTIONS (10)
            {
                question: "What is Newton's First Law of Motion?",
                options: ["F = ma", "An object at rest stays at rest unless acted upon by force", "Every action has equal and opposite reaction", "Acceleration is proportional to force"],
                correct: 1,
                difficulty: "easy",
                explanation: "Newton's First Law: An object at rest stays at rest, and an object in motion stays in motion, unless acted upon by an unbalanced force."
            },
            {
                question: "What is the acceleration due to gravity on Earth?",
                options: ["9.8 m/s²", "10 m/s²", "8.9 m/s²", "11.2 m/s²"],
                correct: 0,
                difficulty: "easy",
                explanation: "Earth's gravitational acceleration is approximately 9.8 meters per second squared."
            },
            {
                question: "What is the unit of force?",
                options: ["Joule", "Newton", "Watt", "Pascal"],
                correct: 1,
                difficulty: "easy",
                explanation: "Force is measured in Newtons (N), named after Sir Isaac Newton."
            },
            {
                question: "What is weight?",
                options: ["Mass of an object", "Force due to gravity", "Volume of an object", "Density of an object"],
                correct: 1,
                difficulty: "easy",
                explanation: "Weight is the gravitational force acting on an object's mass: W = mg"
            },
            {
                question: "What happens to an object with no forces acting on it?",
                options: ["It accelerates", "It stops immediately", "It continues at constant velocity", "It changes direction"],
                correct: 2,
                difficulty: "easy",
                explanation: "With no net force, an object maintains constant velocity (including zero velocity)."
            },
            {
                question: "What is friction?",
                options: ["Force that helps motion", "Force that opposes motion", "Type of energy", "Unit of measurement"],
                correct: 1,
                difficulty: "easy",
                explanation: "Friction is a force that opposes motion between surfaces in contact."
            },
            {
                question: "What is the difference between mass and weight?",
                options: ["No difference", "Mass is constant, weight varies with gravity", "Weight is constant, mass varies", "Both change equally"],
                correct: 1,
                difficulty: "easy",
                explanation: "Mass is the amount of matter (constant), weight is the gravitational force on that mass."
            },
            {
                question: "What is velocity?",
                options: ["Speed only", "Speed with direction", "Distance traveled", "Time taken"],
                correct: 1,
                difficulty: "easy",
                explanation: "Velocity is speed in a specific direction - it's a vector quantity."
            },
            {
                question: "What is acceleration?",
                options: ["Change in speed", "Change in velocity over time", "Final velocity", "Distance per second"],
                correct: 1,
                difficulty: "easy",
                explanation: "Acceleration is the rate of change of velocity: a = (v-u)/t"
            },
            {
                question: "What is inertia?",
                options: ["Tendency to resist changes in motion", "Force of gravity", "Type of energy", "Speed of light"],
                correct: 0,
                difficulty: "easy",
                explanation: "Inertia is an object's tendency to resist changes in its state of motion."
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "What is the formula for kinetic energy?",
                options: ["KE = ½mv²", "KE = mv²", "KE = ½m²v", "KE = m²v²"],
                correct: 0,
                difficulty: "medium",
                explanation: "Kinetic energy equals half the mass times velocity squared: KE = ½mv²"
            },
            {
                question: "What is Newton's Second Law of Motion?",
                options: ["F = mv", "F = ma", "F = mg", "F = mv²"],
                correct: 1,
                difficulty: "medium",
                explanation: "Newton's Second Law states that Force equals mass times acceleration: F = ma"
            },
            {
                question: "What is the formula for momentum?",
                options: ["p = mv", "p = ma", "p = mg", "p = ½mv²"],
                correct: 0,
                difficulty: "medium",
                explanation: "Momentum equals mass times velocity: p = mv"
            },
            {
                question: "What is Newton's Third Law of Motion?",
                options: ["F = ma", "Objects at rest stay at rest", "Every action has an equal and opposite reaction", "Force equals mass times velocity"],
                correct: 2,
                difficulty: "medium",
                explanation: "For every action force, there is an equal and opposite reaction force."
            },
            {
                question: "What is the formula for gravitational potential energy?",
                options: ["PE = mgh", "PE = ½mv²", "PE = mg", "PE = mah"],
                correct: 0,
                difficulty: "medium",
                explanation: "Gravitational potential energy = mass × gravity × height: PE = mgh"
            },
            {
                question: "What factors affect the stopping distance of a vehicle?",
                options: ["Speed only", "Mass only", "Speed, mass, and road conditions", "Time only"],
                correct: 2,
                difficulty: "medium",
                explanation: "Stopping distance depends on speed², mass, braking force, and road conditions."
            },
            {
                question: "What is the difference between speed and velocity?",
                options: ["No difference", "Speed has direction, velocity doesn't", "Velocity has direction, speed doesn't", "Both are identical"],
                correct: 2,
                difficulty: "medium",
                explanation: "Speed is scalar (magnitude only), velocity is vector (magnitude and direction)."
            },
            {
                question: "What happens during elastic collision?",
                options: ["Kinetic energy is lost", "Objects stick together", "Kinetic energy is conserved", "Momentum is lost"],
                correct: 2,
                difficulty: "medium",
                explanation: "In elastic collisions, both momentum and kinetic energy are conserved."
            },
            {
                question: "What is centripetal force?",
                options: ["Force away from center", "Force toward center of circular motion", "Force tangent to circle", "Gravitational force only"],
                correct: 1,
                difficulty: "medium",
                explanation: "Centripetal force acts toward the center, keeping objects in circular motion."
            },
            {
                question: "How does air resistance affect falling objects?",
                options: ["Increases acceleration", "Decreases acceleration", "No effect", "Changes mass"],
                correct: 1,
                difficulty: "medium",
                explanation: "Air resistance opposes motion, reducing the net downward force and acceleration."
            },
            {
                question: "What is terminal velocity?",
                options: ["Maximum possible speed", "Speed when air resistance equals weight", "Speed of sound", "Escape velocity"],
                correct: 1,
                difficulty: "medium",
                explanation: "Terminal velocity occurs when air resistance balances weight, so acceleration becomes zero."
            },
            
            // HARD QUESTIONS (4)
            {
                question: "A 2kg object accelerates at 5 m/s². What net force acts on it?",
                options: ["7 N", "10 N", "2.5 N", "3 N"],
                correct: 1,
                difficulty: "hard",
                explanation: "Using F = ma: F = 2 kg × 5 m/s² = 10 N"
            },
            {
                question: "What is the momentum of a 50kg person running at 8 m/s?",
                options: ["400 kg⋅m/s", "58 kg⋅m/s", "6.25 kg⋅m/s", "200 kg⋅m/s"],
                correct: 0,
                difficulty: "hard",
                explanation: "Momentum p = mv = 50 kg × 8 m/s = 400 kg⋅m/s"
            },
            {
                question: "A car increases speed from 10 m/s to 30 m/s in 4 seconds. What is its acceleration?",
                options: ["5 m/s²", "10 m/s²", "7.5 m/s²", "20 m/s²"],
                correct: 0,
                difficulty: "hard",
                explanation: "a = (v-u)/t = (30-10)/4 = 20/4 = 5 m/s²"
            },
            {
                question: "What is the kinetic energy of a 4kg object moving at 6 m/s?",
                options: ["72 J", "24 J", "144 J", "48 J"],
                correct: 0,
                difficulty: "hard",
                explanation: "KE = ½mv² = ½ × 4 × 6² = ½ × 4 × 36 = 72 J"
            }
        ],
        
        energy: [
            // EASY QUESTIONS (10)
            {
                question: "What is the unit of energy?",
                options: ["Watt", "Joule", "Newton", "Pascal"],
                correct: 1,
                difficulty: "easy",
                explanation: "Energy is measured in Joules (J), named after James Prescott Joule."
            },
            {
                question: "What is potential energy?",
                options: ["Energy of motion", "Stored energy", "Energy of sound", "Energy of light"],
                correct: 1,
                difficulty: "easy",
                explanation: "Potential energy is stored energy that can be converted to other forms."
            },
            {
                question: "What is kinetic energy?",
                options: ["Stored energy", "Energy of motion", "Heat energy", "Light energy"],
                correct: 1,
                difficulty: "easy",
                explanation: "Kinetic energy is the energy an object has due to its motion."
            },
            {
                question: "What type of energy does a stretched rubber band have?",
                options: ["Kinetic", "Potential", "Heat", "Sound"],
                correct: 1,
                difficulty: "easy",
                explanation: "A stretched rubber band has elastic potential energy."
            },
            {
                question: "What happens to the energy of a ball as it falls?",
                options: ["Potential increases", "Kinetic decreases", "Potential converts to kinetic", "Energy disappears"],
                correct: 2,
                difficulty: "easy",
                explanation: "As the ball falls, gravitational potential energy converts to kinetic energy."
            },
            {
                question: "What is chemical energy?",
                options: ["Energy in moving objects", "Energy stored in chemical bonds", "Energy from light", "Energy from heat"],
                correct: 1,
                difficulty: "easy",
                explanation: "Chemical energy is stored in the bonds between atoms and molecules."
            },
            {
                question: "What type of energy transformation occurs in a flashlight?",
                options: ["Chemical to light", "Light to chemical", "Heat to light", "Sound to light"],
                correct: 0,
                difficulty: "easy",
                explanation: "Batteries convert chemical energy to electrical energy, then to light energy."
            },
            {
                question: "What is thermal energy?",
                options: ["Energy of motion", "Energy related to temperature", "Energy of position", "Energy of sound"],
                correct: 1,
                difficulty: "easy",
                explanation: "Thermal energy is related to the temperature and internal motion of particles."
            },
            {
                question: "What type of energy does food contain?",
                options: ["Kinetic", "Potential", "Chemical", "Nuclear"],
                correct: 2,
                difficulty: "easy",
                explanation: "Food contains chemical energy stored in its molecular bonds."
            },
            {
                question: "What is mechanical energy?",
                options: ["Only kinetic energy", "Only potential energy", "Sum of kinetic and potential energy", "Energy from machines"],
                correct: 2,
                difficulty: "easy",
                explanation: "Mechanical energy is the sum of kinetic and potential energy in a system."
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "What is the law of conservation of energy?",
                options: ["Energy can be created", "Energy can be destroyed", "Energy cannot be created or destroyed", "Energy always increases"],
                correct: 2,
                difficulty: "medium",
                explanation: "Energy cannot be created or destroyed, only transformed from one form to another."
            },
            {
                question: "What is power?",
                options: ["Total energy", "Energy per unit mass", "Energy per unit time", "Force per unit area"],
                correct: 2,
                difficulty: "medium",
                explanation: "Power is the rate of energy transfer: P = E/t"
            },
            {
                question: "What is efficiency?",
                options: ["Total energy input", "Energy wasted", "Useful energy output / total energy input", "Power × time"],
                correct: 2,
                difficulty: "medium",
                explanation: "Efficiency = (useful energy output / total energy input) × 100%"
            },
            {
                question: "What happens to 'lost' energy in energy transformations?",
                options: ["It disappears", "It becomes heat", "It becomes matter", "It goes to space"],
                correct: 1,
                difficulty: "medium",
                explanation: "Energy is never lost - it's usually transformed to heat energy (often unuseful)."
            },
            {
                question: "What is gravitational potential energy dependent on?",
                options: ["Mass only", "Height only", "Mass, height, and gravity", "Speed only"],
                correct: 2,
                difficulty: "medium",
                explanation: "GPE = mgh, so it depends on mass, gravitational field strength, and height."
            },
            {
                question: "What energy transformation occurs in a hydroelectric power station?",
                options: ["Chemical to electrical", "Gravitational potential to electrical", "Nuclear to electrical", "Solar to electrical"],
                correct: 1,
                difficulty: "medium",
                explanation: "Water's gravitational potential energy converts to kinetic, then electrical energy."
            },
            {
                question: "Why are energy transformations never 100% efficient?",
                options: ["Energy is destroyed", "Some energy becomes heat", "Energy disappears", "Conservation law is wrong"],
                correct: 1,
                difficulty: "medium",
                explanation: "Some energy always transforms to heat due to friction and resistance."
            },
            {
                question: "What is elastic potential energy?",
                options: ["Energy in stretched or compressed objects", "Energy of motion", "Energy from heat", "Energy from light"],
                correct: 0,
                difficulty: "medium",
                explanation: "Elastic potential energy is stored in deformed elastic objects like springs."
            },
            {
                question: "What energy changes occur when you climb stairs?",
                options: ["Chemical to gravitational potential", "Kinetic to potential", "Heat to kinetic", "Light to heat"],
                correct: 0,
                difficulty: "medium",
                explanation: "Your body converts chemical energy (from food) to gravitational potential energy."
            },
            {
                question: "What is the unit of power?",
                options: ["Joule", "Newton", "Watt", "Pascal"],
                correct: 2,
                difficulty: "medium",
                explanation: "Power is measured in Watts (W), where 1 W = 1 J/s."
            },
            {
                question: "What energy transformation occurs in photosynthesis?",
                options: ["Chemical to light", "Light to chemical", "Heat to chemical", "Kinetic to chemical"],
                correct: 1,
                difficulty: "medium",
                explanation: "Plants convert light energy into chemical energy (glucose) during photosynthesis."
            },
            
            // HARD QUESTIONS (4)
            {
                question: "A 5kg object is lifted 10m. What is its gravitational potential energy gain? (g = 10 m/s²)",
                options: ["50 J", "500 J", "100 J", "1000 J"],
                correct: 1,
                difficulty: "hard",
                explanation: "PE = mgh = 5 kg × 10 m/s² × 10 m = 500 J"
            },
            {
                question: "If a machine uses 1000 J of energy and produces 800 J of useful work, what is its efficiency?",
                options: ["80%", "125%", "20%", "1.25%"],
                correct: 0,
                difficulty: "hard",
                explanation: "Efficiency = (800/1000) × 100% = 80%"
            },
            {
                question: "A 100W light bulb runs for 5 hours. How much energy does it consume?",
                options: ["500 J", "20 J", "1,800,000 J", "100 J"],
                correct: 2,
                difficulty: "hard",
                explanation: "Energy = Power × time = 100 W × (5 × 3600) s = 1,800,000 J"
            },
            {
                question: "What power is needed to lift a 50kg object 20m in 10 seconds? (g = 10 m/s²)",
                options: ["1000 W", "100 W", "10,000 W", "500 W"],
                correct: 0,
                difficulty: "hard",
                explanation: "Work = mgh = 50×10×20 = 10,000 J; Power = Work/time = 10,000/10 = 1000 W"
            }
        ],
        
        electricity: [
            // EASY QUESTIONS (10)
            {
                question: "What is electric current?",
                options: ["Flow of protons", "Flow of electrons", "Flow of neutrons", "Flow of photons"],
                correct: 1,
                difficulty: "easy",
                explanation: "Electric current is the flow of electrons through a conductor."
            },
            {
                question: "What is the unit of current?",
                options: ["Volt", "Ampere", "Ohm", "Watt"],
                correct: 1,
                difficulty: "easy",
                explanation: "Electric current is measured in Amperes (A)."
            },
            {
                question: "What is the unit of voltage?",
                options: ["Ampere", "Volt", "Ohm", "Watt"],
                correct: 1,
                difficulty: "easy",
                explanation: "Voltage (potential difference) is measured in Volts (V)."
            },
            {
                question: "What is the unit of resistance?",
                options: ["Volt", "Ampere", "Ohm", "Watt"],
                correct: 2,
                difficulty: "easy",
                explanation: "Electrical resistance is measured in Ohms (Ω)."
            },
            {
                question: "What do we call materials that allow electricity to flow easily?",
                options: ["Insulators", "Conductors", "Semiconductors", "Resistors"],
                correct: 1,
                difficulty: "easy",
                explanation: "Conductors allow electric current to flow easily through them."
            },
            {
                question: "What do we call materials that resist the flow of electricity?",
                options: ["Conductors", "Insulators", "Semiconductors", "Superconductors"],
                correct: 1,
                difficulty: "easy",
                explanation: "Insulators resist the flow of electric current."
            },
            {
                question: "Which of these is a good conductor?",
                options: ["Plastic", "Rubber", "Copper", "Glass"],
                correct: 2,
                difficulty: "easy",
                explanation: "Copper is an excellent electrical conductor, commonly used in wires."
            },
            {
                question: "What is a complete path for electric current called?",
                options: ["Circuit", "Battery", "Switch", "Resistor"],
                correct: 0,
                difficulty: "easy",
                explanation: "A circuit is a complete path that allows electric current to flow."
            },
            {
                question: "What happens when you open a switch in a circuit?",
                options: ["Current increases", "Current decreases", "Current stops", "Voltage increases"],
                correct: 2,
                difficulty: "easy",
                explanation: "Opening a switch breaks the circuit, stopping the flow of current."
            },
            {
                question: "What provides the energy in a simple battery circuit?",
                options: ["The wires", "The battery", "The switch", "The air"],
                correct: 1,
                difficulty: "easy",
                explanation: "The battery provides the electrical energy to drive current through the circuit."
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "What is Ohm's Law?",
                options: ["V = IR", "P = IV", "E = mc²", "F = ma"],
                correct: 0,
                difficulty: "medium",
                explanation: "Ohm's Law states that Voltage equals Current times Resistance (V = IR)."
            },
            {
                question: "What is voltage?",
                options: ["Flow of electrons", "Energy per unit charge", "Opposition to current flow", "Rate of energy transfer"],
                correct: 1,
                difficulty: "medium",
                explanation: "Voltage is the energy transferred per unit charge: V = W/Q"
            },
            {
                question: "What is electrical power?",
                options: ["P = VI", "P = V/I", "P = V + I", "P = V - I"],
                correct: 0,
                difficulty: "medium",
                explanation: "Electrical power equals voltage times current: P = VI"
            },
            {
                question: "In a series circuit, what happens to current at each component?",
                options: ["It increases", "It decreases", "It stays the same", "It varies randomly"],
                correct: 2,
                difficulty: "medium",
                explanation: "In a series circuit, current is the same at all points."
            },
            {
                question: "In a parallel circuit, what happens to voltage across each branch?",
                options: ["It increases", "It decreases", "It stays the same", "It varies randomly"],
                correct: 2,
                difficulty: "medium",
                explanation: "In a parallel circuit, voltage is the same across each branch."
            },
            {
                question: "What happens to total resistance when resistors are added in series?",
                options: ["It decreases", "It increases", "It stays the same", "It becomes zero"],
                correct: 1,
                difficulty: "medium",
                explanation: "In series, total resistance equals the sum of individual resistances."
            },
            {
                question: "What happens to total resistance when resistors are added in parallel?",
                options: ["It increases", "It decreases", "It stays the same", "It becomes infinite"],
                correct: 1,
                difficulty: "medium",
                explanation: "In parallel, total resistance is less than the smallest individual resistance."
            },
            {
                question: "What is the relationship between power and current for a fixed resistance?",
                options: ["P ∝ I", "P ∝ I²", "P ∝ 1/I", "P ∝ 1/I²"],
                correct: 1,
                difficulty: "medium",
                explanation: "Since P = I²R, power is proportional to the square of current."
            },
            {
                question: "What safety feature prevents excessive current in household circuits?",
                options: ["Switch", "Fuse", "Battery", "Wire"],
                correct: 1,
                difficulty: "medium",
                explanation: "Fuses and circuit breakers prevent dangerous currents by breaking the circuit."
            },
            {
                question: "What is alternating current (AC)?",
                options: ["Current that flows in one direction", "Current that changes direction periodically", "Very high current", "Very low current"],
                correct: 1,
                difficulty: "medium",
                explanation: "AC current changes direction periodically, unlike DC which flows in one direction."
            },
            {
                question: "Why is AC used for power transmission over long distances?",
                options: ["It's safer", "Voltage can be easily changed", "It travels faster", "It's cheaper"],
                correct: 1,
                difficulty: "medium",
                explanation: "AC voltage can be easily transformed, allowing efficient long-distance transmission."
            },
            
            // HARD QUESTIONS (4)
            {
                question: "A 12V battery is connected to a 4Ω resistor. What current flows?",
                options: ["3 A", "48 A", "8 A", "16 A"],
                correct: 0,
                difficulty: "hard",
                explanation: "Using Ohm's Law: I = V/R = 12V / 4Ω = 3 A"
            },
            {
                question: "What power is dissipated by a 6Ω resistor carrying 2A current?",
                options: ["12 W", "24 W", "3 W", "36 W"],
                correct: 1,
                difficulty: "hard",
                explanation: "P = I²R = 2² × 6 = 4 × 6 = 24 W"
            },
            {
                question: "Two 8Ω resistors are connected in parallel. What is the total resistance?",
                options: ["16 Ω", "4 Ω", "8 Ω", "2 Ω"],
                correct: 1,
                difficulty: "hard",
                explanation: "For identical parallel resistors: R_total = R/n = 8Ω/2 = 4Ω"
            },
            {
                question: "A 240V, 60W light bulb operates normally. What is its resistance?",
                options: ["4 Ω", "960 Ω", "14,400 Ω", "300 Ω"],
                correct: 1,
                difficulty: "hard",
                explanation: "P = V²/R, so R = V²/P = 240²/60 = 57,600/60 = 960 Ω"
            }
        ],
        
        magnetism: [
            // EASY QUESTIONS (10)
            {
                question: "What are the two poles of a magnet called?",
                options: ["Positive and negative", "North and south", "East and west", "Plus and minus"],
                correct: 1,
                difficulty: "easy",
                explanation: "All magnets have a north pole and a south pole."
            },
            {
                question: "What happens when like poles are brought together?",
                options: ["They attract", "They repel", "Nothing happens", "They neutralize"],
                correct: 1,
                difficulty: "easy",
                explanation: "Like poles (N-N or S-S) repel each other."
            },
            {
                question: "What happens when opposite poles are brought together?",
                options: ["They repel", "They attract", "Nothing happens", "They neutralize"],
                correct: 1,
                difficulty: "easy",
                explanation: "Opposite poles (N-S) attract each other."
            },
            {
                question: "What materials are attracted by magnets?",
                options: ["All metals", "Iron, nickel, cobalt", "All conductors", "All insulators"],
                correct: 1,
                difficulty: "easy",
                explanation: "Only ferromagnetic materials like iron, nickel, and cobalt are strongly attracted to magnets."
            },
            {
                question: "What is the area around a magnet where its force can be detected called?",
                options: ["Magnetic zone", "Magnetic field", "Magnetic area", "Magnetic space"],
                correct: 1,
                difficulty: "easy",
                explanation: "A magnetic field is the region around a magnet where magnetic forces can be detected."
            },
            {
                question: "What do magnetic field lines show?",
                options: ["The shape of the magnet", "The direction of magnetic force", "The color of magnetism", "The weight of the magnet"],
                correct: 1,
                difficulty: "easy",
                explanation: "Magnetic field lines show the direction and strength of magnetic forces."
            },
            {
                question: "Where is the magnetic field strongest around a bar magnet?",
                options: ["In the middle", "At the poles", "Far away from the magnet", "Everywhere equally"],
                correct: 1,
                difficulty: "easy",
                explanation: "The magnetic field is strongest at the poles of a magnet."
            },
            {
                question: "What happens when you break a bar magnet in half?",
                options: ["You get one north and one south pole", "You get two complete magnets", "It loses magnetism", "Nothing happens"],
                correct: 1,
                difficulty: "easy",
                explanation: "Each piece becomes a complete magnet with both north and south poles."
            },
            {
                question: "Which way do magnetic field lines point?",
                options: ["From south to north", "From north to south", "In random directions", "They don't point anywhere"],
                correct: 1,
                difficulty: "easy",
                explanation: "Magnetic field lines point from north pole to south pole outside the magnet."
            },
            {
                question: "What is a compass needle?",
                options: ["A small bar magnet", "A piece of plastic", "A metal wire", "A glass rod"],
                correct: 0,
                difficulty: "easy",
                explanation: "A compass needle is a small bar magnet that aligns with Earth's magnetic field."
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "How can you make an electromagnet?",
                options: ["Wrap wire around iron and pass current through it", "Heat up a piece of iron", "Rub iron with a magnet", "Cool down iron"],
                correct: 0,
                difficulty: "medium",
                explanation: "An electromagnet is made by wrapping wire around an iron core and passing electric current through the wire."
            },
            {
                question: "What increases the strength of an electromagnet?",
                options: ["More turns of wire", "Higher current", "Iron core", "All of the above"],
                correct: 3,
                difficulty: "medium",
                explanation: "Electromagnet strength increases with more wire turns, higher current, and using an iron core."
            },
            {
                question: "What happens to an electromagnet when the current is switched off?",
                options: ["It becomes stronger", "It loses its magnetism", "It changes polarity", "Nothing happens"],
                correct: 1,
                difficulty: "medium",
                explanation: "When current stops flowing, the electromagnet loses its magnetic properties."
            },
            {
                question: "What is the motor effect?",
                options: ["Magnets producing electricity", "Current-carrying conductor in magnetic field experiences force", "Motors getting hot", "Electromagnets attracting iron"],
                correct: 1,
                difficulty: "medium",
                explanation: "The motor effect is the force on a current-carrying conductor in a magnetic field."
            },
            {
                question: "What determines the direction of force in the motor effect?",
                options: ["Only current direction", "Only magnetic field direction", "Both current and field directions", "Neither"],
                correct: 2,
                difficulty: "medium",
                explanation: "Force direction depends on both current direction and magnetic field direction."
            },
            {
                question: "How can you reverse the direction of an electric motor?",
                options: ["Increase current", "Decrease current", "Reverse current or magnetic field", "Change the speed"],
                correct: 2,
                difficulty: "medium",
                explanation: "Reversing either the current direction or magnetic field direction reverses motor rotation."
            },
            {
                question: "What is electromagnetic induction?",
                options: ["Making electromagnets", "Generating electricity using magnetism", "Attracting metals", "Creating magnetic fields"],
                correct: 1,
                difficulty: "medium",
                explanation: "Electromagnetic induction is generating electricity by moving conductors in magnetic fields."
            },
            {
                question: "What is needed for electromagnetic induction to occur?",
                options: ["Static magnetic field", "Moving magnetic field or moving conductor", "Very strong magnet", "High temperature"],
                correct: 1,
                difficulty: "medium",
                explanation: "Induction requires relative motion between magnetic field and conductor."
            },
            {
                question: "How does a generator work?",
                options: ["Uses motor effect", "Uses electromagnetic induction", "Uses static electricity", "Uses heat"],
                correct: 1,
                difficulty: "medium",
                explanation: "Generators convert mechanical energy to electrical energy using electromagnetic induction."
            },
            {
                question: "What increases the induced voltage in a generator?",
                options: ["Stronger magnet", "Faster rotation", "More turns of wire", "All of the above"],
                correct: 3,
                difficulty: "medium",
                explanation: "Induced voltage increases with stronger magnetic field, faster motion, and more wire turns."
            },
            {
                question: "What is the difference between AC and DC generators?",
                options: ["AC uses electromagnets", "DC produces alternating current", "AC produces alternating current", "No difference"],
                correct: 2,
                difficulty: "medium",
                explanation: "AC generators produce alternating current; DC generators produce direct current."
            },
            
            // HARD QUESTIONS (4)
            {
                question: "Why does a current-carrying wire in a magnetic field experience a force?",
                options: ["The wire becomes magnetic", "Magnetic field interacts with current's magnetic field", "The wire heats up", "Electrons are attracted to magnets"],
                correct: 1,
                difficulty: "hard",
                explanation: "Current creates its own magnetic field, which interacts with the external field to produce force."
            },
            {
                question: "What happens when you move a conductor through a magnetic field?",
                options: ["Nothing", "It heats up", "Voltage is induced", "It becomes magnetized"],
                correct: 2,
                difficulty: "hard",
                explanation: "Moving a conductor through a magnetic field induces a voltage (Faraday's law)."
            },
            {
                question: "In which direction is force exerted on a current-carrying conductor in a magnetic field?",
                options: ["Along the current", "Along the magnetic field", "Perpendicular to both current and field", "Randomly"],
                correct: 2,
                difficulty: "hard",
                explanation: "Force is perpendicular to both current direction and magnetic field direction."
            },
            {
                question: "What is the purpose of a commutator in a DC motor?",
                options: ["Increase speed", "Increase power", "Reverse current direction every half turn", "Reduce friction"],
                correct: 2,
                difficulty: "hard",
                explanation: "The commutator reverses current direction to maintain rotation in the same direction."
            }
        ],
        
        waves: [
            // EASY QUESTIONS (10)
            {
                question: "What is a wave?",
                options: ["Moving water", "Transfer of energy without matter transfer", "Vibrating object", "Sound only"],
                correct: 1,
                difficulty: "easy",
                explanation: "A wave transfers energy from one place to another without transferring matter."
            },
            {
                question: "What is frequency?",
                options: ["Distance between waves", "Height of waves", "Number of waves per second", "Speed of waves"],
                correct: 2,
                difficulty: "easy",
                explanation: "Frequency is the number of complete waves that pass a point in one second."
            },
            {
                question: "What is the unit of frequency?",
                options: ["Meter", "Second", "Hertz", "Watt"],
                correct: 2,
                difficulty: "easy",
                explanation: "Frequency is measured in Hertz (Hz), where 1 Hz = 1 wave per second."
            },
            {
                question: "What is wavelength?",
                options: ["Height of a wave", "Time for one wave", "Distance between two wave peaks", "Speed of wave"],
                correct: 2,
                difficulty: "easy",
                explanation: "Wavelength is the distance between two consecutive peaks (or troughs) of a wave."
            },
            {
                question: "What is amplitude?",
                options: ["Distance between peaks", "Maximum displacement from rest position", "Number of waves", "Speed of wave"],
                correct: 1,
                difficulty: "easy",
                explanation: "Amplitude is the maximum displacement of particles from their rest position."
            },
            {
                question: "What determines the loudness of a sound wave?",
                options: ["Frequency", "Wavelength", "Amplitude", "Speed"],
                correct: 2,
                difficulty: "easy",
                explanation: "Amplitude determines loudness - larger amplitude means louder sound."
            },
            {
                question: "What determines the pitch of a sound wave?",
                options: ["Amplitude", "Frequency", "Wavelength", "Speed"],
                correct: 1,
                difficulty: "easy",
                explanation: "Frequency determines pitch - higher frequency means higher pitch."
            },
            {
                question: "What type of wave needs a medium to travel?",
                options: ["Light waves", "Radio waves", "Sound waves", "X-rays"],
                correct: 2,
                difficulty: "easy",
                explanation: "Sound waves are mechanical waves that need matter (medium) to travel through."
            },
            {
                question: "What type of wave doesn't need a medium?",
                options: ["Sound waves", "Water waves", "Light waves", "Seismic waves"],
                correct: 2,
                difficulty: "easy",
                explanation: "Light waves are electromagnetic waves that can travel through vacuum."
            },
            {
                question: "How fast does light travel?",
                options: ["300 m/s", "3000 m/s", "300,000 m/s", "300,000,000 m/s"],
                correct: 3,
                difficulty: "easy",
                explanation: "Light travels at approximately 300,000,000 meters per second in vacuum."
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "What is the speed of light in a vacuum?",
                options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁹ m/s", "3 × 10⁷ m/s"],
                correct: 0,
                difficulty: "medium",
                explanation: "The speed of light in a vacuum is approximately 3 × 10⁸ meters per second."
            },
            {
                question: "What is the relationship between wave speed, frequency and wavelength?",
                options: ["v = fλ", "v = f/λ", "v = f + λ", "v = f - λ"],
                correct: 0,
                difficulty: "medium",
                explanation: "Wave speed equals frequency times wavelength: v = fλ"
            },
            {
                question: "What type of wave is sound?",
                options: ["Transverse", "Longitudinal", "Both", "Neither"],
                correct: 1,
                difficulty: "medium",
                explanation: "Sound waves are longitudinal - air particles vibrate back and forth in the direction of wave travel."
            },
            {
                question: "What is the speed of sound in air?",
                options: ["330 m/s", "300,000,000 m/s", "1500 m/s", "3000 m/s"],
                correct: 0,
                difficulty: "medium",
                explanation: "Sound travels at approximately 330 m/s in air at room temperature."
            },
            {
                question: "In a transverse wave, particles vibrate:",
                options: ["Parallel to wave direction", "Perpendicular to wave direction", "In circles", "Randomly"],
                correct: 1,
                difficulty: "medium",
                explanation: "In transverse waves, particles vibrate perpendicular to the direction of wave travel."
            },
            {
                question: "In a longitudinal wave, particles vibrate:",
                options: ["Perpendicular to wave direction", "Parallel to wave direction", "In circles", "Up and down only"],
                correct: 1,
                difficulty: "medium",
                explanation: "In longitudinal waves, particles vibrate parallel to the direction of wave travel."
            },
            {
                question: "What happens to wave speed when it enters a denser medium?",
                options: ["Always increases", "Always decreases", "May increase or decrease", "Stays the same"],
                correct: 2,
                difficulty: "medium",
                explanation: "Wave speed in different media depends on the properties of both the wave and medium."
            },
            {
                question: "What is an echo?",
                options: ["Amplified sound", "Reflected sound", "Refracted sound", "Absorbed sound"],
                correct: 1,
                difficulty: "medium",
                explanation: "An echo is sound that has been reflected off a surface back to the listener."
            },
            {
                question: "What is the electromagnetic spectrum?",
                options: ["Range of sound frequencies", "Range of electromagnetic waves", "Range of mechanical waves", "Range of water waves"],
                correct: 1,
                difficulty: "medium",
                explanation: "The electromagnetic spectrum includes all electromagnetic waves from radio to gamma rays."
            },
            {
                question: "Which has the longest wavelength in the electromagnetic spectrum?",
                options: ["Gamma rays", "X-rays", "Radio waves", "Visible light"],
                correct: 2,
                difficulty: "medium",
                explanation: "Radio waves have the longest wavelengths in the electromagnetic spectrum."
            },
            {
                question: "What causes wave interference?",
                options: ["Single wave traveling", "Two or more waves meeting", "Wave changing direction", "Wave stopping"],
                correct: 1,
                difficulty: "medium",
                explanation: "Interference occurs when two or more waves meet and their effects combine."
            },
            
            // HARD QUESTIONS (4)
            {
                question: "A wave has frequency 50 Hz and wavelength 6 m. What is its speed?",
                options: ["300 m/s", "56 m/s", "8.3 m/s", "44 m/s"],
                correct: 0,
                difficulty: "hard",
                explanation: "Using v = fλ: v = 50 Hz × 6 m = 300 m/s"
            },
            {
                question: "Light travels at 2 × 10⁸ m/s in glass. What is the refractive index of glass?",
                options: ["1.5", "2.0", "0.67", "1.0"],
                correct: 0,
                difficulty: "hard",
                explanation: "n = c/v = (3 × 10⁸)/(2 × 10⁸) = 1.5"
            },
            {
                question: "What is the wavelength of 100 MHz radio waves? (c = 3 × 10⁸ m/s)",
                options: ["3 m", "30 m", "300 m", "0.3 m"],
                correct: 0,
                difficulty: "hard",
                explanation: "λ = c/f = (3 × 10⁸)/(100 × 10⁶) = 3 m"
            },
            {
                question: "If sound takes 2 seconds to travel 660 m, what is the speed of sound?",
                options: ["330 m/s", "1320 m/s", "660 m/s", "165 m/s"],
                correct: 0,
                difficulty: "hard",
                explanation: "Speed = distance/time = 660 m / 2 s = 330 m/s"
            }
        ],
        
        light: [
            // EASY QUESTIONS (10)
            {
                question: "What type of wave is light?",
                options: ["Sound wave", "Water wave", "Electromagnetic wave", "Seismic wave"],
                correct: 2,
                difficulty: "easy",
                explanation: "Light is an electromagnetic wave that can travel through vacuum."
            },
            {
                question: "What happens when light hits a mirror?",
                options: ["It is absorbed", "It is reflected", "It disappears", "It changes color"],
                correct: 1,
                difficulty: "easy",
                explanation: "Light reflects off mirrors according to the law of reflection."
            },
            {
                question: "What are the primary colors of light?",
                options: ["Red, yellow, blue", "Red, green, blue", "Yellow, cyan, magenta", "Red, orange, yellow"],
                correct: 1,
                difficulty: "medium",
                explanation: "The primary colors of light are red, green, and blue (RGB)."
            },
            {
                question: "What color do you get when you mix all colors of light?",
                options: ["Black", "White", "Gray", "Brown"],
                correct: 1,
                difficulty: "easy",
                explanation: "When all colors of light are mixed together, they produce white light."
            },
            {
                question: "What is a convex lens?",
                options: ["Lens that curves inward", "Lens that curves outward", "Flat lens", "Broken lens"],
                correct: 1,
                difficulty: "easy",
                explanation: "A convex lens curves outward and converges (focuses) light rays."
            },
            {
                question: "What is a concave lens?",
                options: ["Lens that curves outward", "Lens that curves inward", "Flat lens", "Thick lens"],
                correct: 1,
                difficulty: "easy",
                explanation: "A concave lens curves inward and diverges (spreads out) light rays."
            },
            {
                question: "What happens to white light when it passes through a prism?",
                options: ["It becomes brighter", "It splits into colors", "It disappears", "It becomes dimmer"],
                correct: 1,
                difficulty: "easy",
                explanation: "A prism disperses white light into its component colors (spectrum)."
            },
            {
                question: "Why do we see a rainbow after rain?",
                options: ["Water reflects light", "Water droplets act like prisms", "Clouds block some light", "Rain washes the sky"],
                correct: 1,
                difficulty: "easy",
                explanation: "Water droplets in the air act like tiny prisms, dispersing sunlight into colors."
            },
            {
                question: "What allows us to see objects that don't produce light?",
                options: ["They glow in the dark", "Light reflects off them", "They absorb all light", "They produce invisible light"],
                correct: 1,
                difficulty: "easy",
                explanation: "We see objects when light reflects off them and enters our eyes."
            },
            {
                question: "What is the pupil of the eye?",
                options: ["Colored part", "Black opening in center", "White part", "Curved front surface"],
                correct: 1,
                difficulty: "easy",
                explanation: "The pupil is the opening that allows light to enter the eye."
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "What is refraction?",
                options: ["Light bouncing off surfaces", "Light bending when changing medium", "Light being absorbed", "Light being scattered"],
                correct: 1,
                difficulty: "medium",
                explanation: "Refraction is the bending of light when it passes from one medium to another."
            },
            {
                question: "What is the law of reflection?",
                options: ["Angle of incidence = angle of reflection", "Light always bends", "Light always speeds up", "Light changes color"],
                correct: 0,
                difficulty: "medium",
                explanation: "The law of reflection states that the angle of incidence equals the angle of reflection."
            },
            {
                question: "What does a converging lens do?",
                options: ["Spreads light apart", "Brings light rays together", "Absorbs light", "Reflects light"],
                correct: 1,
                difficulty: "medium",
                explanation: "A converging (convex) lens brings parallel light rays together to a focus point."
            },
            {
                question: "What does a diverging lens do?",
                options: ["Brings light rays together", "Spreads light rays apart", "Stops light", "Reverses light"],
                correct: 1,
                difficulty: "medium",
                explanation: "A diverging (concave) lens spreads parallel light rays apart."
            },
            {
                question: "Why does light bend when entering water from air?",
                options: ["Water is wet", "Light slows down in water", "Water is blue", "Light gets tired"],
                correct: 1,
                difficulty: "medium",
                explanation: "Light bends because it travels at different speeds in different materials."
            },
            {
                question: "What is total internal reflection?",
                options: ["All light is absorbed", "All light is refracted", "All light is reflected back", "Light disappears"],
                correct: 2,
                difficulty: "medium",
                explanation: "Total internal reflection occurs when light cannot escape from a denser medium."
            },
            {
                question: "How does a periscope work?",
                options: ["Uses lenses", "Uses two mirrors", "Uses prisms", "Uses fiber optics"],
                correct: 1,
                difficulty: "medium",
                explanation: "A periscope uses two mirrors to reflect light around corners."
            },
            {
                question: "What part of the eye acts like a camera lens?",
                options: ["Pupil", "Iris", "Lens", "Retina"],
                correct: 2,
                difficulty: "medium",
                explanation: "The eye's lens focuses light onto the retina, like a camera lens focuses onto film."
            },
            {
                question: "What is the focal length of a lens?",
                options: ["Distance from lens to object", "Distance from lens to focal point", "Diameter of lens", "Thickness of lens"],
                correct: 1,
                difficulty: "medium",
                explanation: "Focal length is the distance from the lens to its focal point."
            },
            {
                question: "Why do objects appear smaller when viewed through the thick end of a telescope?",
                options: ["The lens is dirty", "Light is absorbed", "It's a diverging lens system", "It's upside down"],
                correct: 2,
                difficulty: "medium",
                explanation: "Looking through the wrong end uses the lens as a diverging system, making images smaller."
            },
            {
                question: "What causes dispersion of light?",
                options: ["Different colors travel at different speeds in materials", "Light gets tired", "Colors separate naturally", "Prisms add colors"],
                correct: 0,
                difficulty: "medium",
                explanation: "Different wavelengths (colors) of light refract by different amounts in materials."
            },
            
            // HARD QUESTIONS (4)
            {
                question: "What is the critical angle?",
                options: ["45 degrees", "Angle where refraction becomes reflection", "90 degrees", "Angle of total internal reflection"],
                correct: 3,
                difficulty: "hard",
                explanation: "The critical angle is the minimum angle of incidence for total internal reflection to occur."
            },
            {
                question: "A ray enters glass (n=1.5) from air at 30°. What is the refraction angle?",
                options: ["19.5°", "30°", "45°", "20°"],
                correct: 0,
                difficulty: "hard",
                explanation: "Using Snell's law: sin θr = sin 30°/1.5 = 0.5/1.5 = 0.333, so θr ≈ 19.5°"
            },
            {
                question: "What is the refractive index?",
                options: ["Speed of light in vacuum / speed in medium", "Speed in medium / speed in vacuum", "Wavelength in vacuum", "Frequency in medium"],
                correct: 0,
                difficulty: "hard",
                explanation: "Refractive index n = c/v, where c is speed in vacuum and v is speed in the medium."
            },
            {
                question: "What happens to wavelength when light enters a denser medium?",
                options: ["Increases", "Decreases", "Stays same", "Becomes zero"],
                correct: 1,
                difficulty: "hard",
                explanation: "Wavelength decreases in denser media as speed decreases, but frequency stays constant."
            }
        ],
        
        atomic: [
            // EASY QUESTIONS (10)
            {
                question: "What are the three main subatomic particles?",
                options: ["Protons, neutrons, electrons", "Protons, photons, electrons", "Neutrons, photons, positrons", "Quarks, leptons, bosons"],
                correct: 0,
                difficulty: "easy",
                explanation: "Atoms consist of protons (positive), neutrons (neutral), and electrons (negative)."
            },
            {
                question: "What charge do protons have?",
                options: ["Negative", "Positive", "Neutral", "Variable"],
                correct: 1,
                difficulty: "easy",
                explanation: "Protons carry a positive electric charge."
            },
            {
                question: "What charge do electrons have?",
                options: ["Positive", "Negative", "Neutral", "Variable"],
                correct: 1,
                difficulty: "easy",
                explanation: "Electrons carry a negative electric charge."
            },
            {
                question: "What charge do neutrons have?",
                options: ["Positive", "Negative", "Neutral", "Variable"],
                correct: 2,
                difficulty: "easy",
                explanation: "Neutrons have no electric charge - they are neutral."
            },
            {
                question: "Where are protons and neutrons found in an atom?",
                options: ["In electron shells", "In the nucleus", "Moving freely", "Outside the atom"],
                correct: 1,
                difficulty: "easy",
                explanation: "Protons and neutrons are located in the atom's nucleus at the center."
            },
            {
                question: "Where are electrons found in an atom?",
                options: ["In the nucleus", "In shells around the nucleus", "Inside protons", "Outside the atom"],
                correct: 1,
                difficulty: "easy",
                explanation: "Electrons occupy shells (energy levels) around the nucleus."
            },
            {
                question: "What makes an atom electrically neutral?",
                options: ["No particles present", "Equal numbers of protons and electrons", "Only neutrons present", "Protons and neutrons balance"],
                correct: 1,
                difficulty: "easy",
                explanation: "Equal numbers of protons (+) and electrons (-) make the atom neutral overall."
            },
            {
                question: "What is the center of an atom called?",
                options: ["Core", "Nucleus", "Center", "Heart"],
                correct: 1,
                difficulty: "easy",
                explanation: "The nucleus is the central core containing protons and neutrons."
            },
            {
                question: "Which particle has the smallest mass?",
                options: ["Proton", "Neutron", "Electron", "They're all equal"],
                correct: 2,
                difficulty: "easy",
                explanation: "Electrons have much smaller mass than protons or neutrons."
            },
            {
                question: "What determines the size of an atom?",
                options: ["Size of nucleus", "Number of protons", "Electron shells", "Number of neutrons"],
                correct: 2,
                difficulty: "easy",
                explanation: "The outermost electron shell determines the atom's overall size."
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "What is the atomic number?",
                options: ["Number of neutrons", "Number of protons", "Number of electrons", "Total number of particles"],
                correct: 1,
                difficulty: "medium",
                explanation: "The atomic number is the number of protons in an atom's nucleus."
            },
            {
                question: "What is radioactivity?",
                options: ["Atoms combining", "Atoms splitting", "Unstable nuclei emitting radiation", "Electrons jumping shells"],
                correct: 2,
                difficulty: "medium",
                explanation: "Radioactivity is the spontaneous emission of radiation from unstable atomic nuclei."
            },
            {
                question: "What is alpha radiation?",
                options: ["High energy electrons", "Helium nuclei", "Electromagnetic waves", "Fast neutrons"],
                correct: 1,
                difficulty: "hard",
                explanation: "Alpha radiation consists of helium nuclei (2 protons + 2 neutrons)."
            },
            {
                question: "What is beta radiation?",
                options: ["Helium nuclei", "High energy electrons", "Electromagnetic waves", "Protons"],
                correct: 1,
                difficulty: "medium",
                explanation: "Beta radiation consists of high-energy electrons (or positrons)."
            },
            {
                question: "What is gamma radiation?",
                options: ["Particles", "High energy electromagnetic waves", "Slow neutrons", "Low energy electrons"],
                correct: 1,
                difficulty: "medium",
                explanation: "Gamma radiation is high-energy electromagnetic radiation."
            },
            {
                question: "Which type of radiation is most penetrating?",
                options: ["Alpha", "Beta", "Gamma", "All equal"],
                correct: 2,
                difficulty: "medium",
                explanation: "Gamma radiation is the most penetrating and requires thick lead shielding."
            },
            {
                question: "Which type of radiation is least penetrating?",
                options: ["Alpha", "Beta", "Gamma", "All equal"],
                correct: 0,
                difficulty: "medium",
                explanation: "Alpha particles are stopped by paper or skin - least penetrating."
            },
            {
                question: "What is half-life?",
                options: ["Time for half the atoms to decay", "Time for all atoms to decay", "Time for atoms to form", "Half the age of atoms"],
                correct: 0,
                difficulty: "medium",
                explanation: "Half-life is the time for half of the radioactive nuclei in a sample to decay."
            },
            {
                question: "What happens to mass number during alpha decay?",
                options: ["Increases by 4", "Decreases by 4", "Stays same", "Increases by 2"],
                correct: 1,
                difficulty: "medium",
                explanation: "Alpha decay removes 2 protons and 2 neutrons, decreasing mass number by 4."
            },
            {
                question: "What happens to atomic number during beta-minus decay?",
                options: ["Increases by 1", "Decreases by 1", "Stays same", "Increases by 2"],
                correct: 0,
                difficulty: "medium",
                explanation: "Beta-minus decay converts a neutron to proton, increasing atomic number by 1."
            },
            {
                question: "What is nuclear fission?",
                options: ["Joining light nuclei", "Splitting heavy nuclei", "Radioactive decay", "Creating electrons"],
                correct: 1,
                difficulty: "medium",
                explanation: "Nuclear fission is the splitting of heavy atomic nuclei into lighter fragments."
            },
            
            // HARD QUESTIONS (4)
            {
                question: "What are isotopes?",
                options: ["Atoms with same protons, different neutrons", "Atoms with same neutrons, different protons", "Atoms with same electrons", "Different elements entirely"],
                correct: 0,
                difficulty: "hard",
                explanation: "Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons."
            },
            {
                question: "What is nuclear fusion?",
                options: ["Splitting heavy nuclei", "Joining light nuclei", "Radioactive decay", "Electron capture"],
                correct: 1,
                difficulty: "hard",
                explanation: "Nuclear fusion is the joining of light atomic nuclei to form heavier nuclei."
            },
            {
                question: "Why is the nucleus stable despite proton repulsion?",
                options: ["Protons don't repel", "Strong nuclear force overcomes electromagnetic force", "Neutrons attract protons", "Electrons hold it together"],
                correct: 1,
                difficulty: "hard",
                explanation: "The strong nuclear force (very short range) overcomes electromagnetic repulsion in the nucleus."
            },
            {
                question: "What is the binding energy of a nucleus?",
                options: ["Energy holding electrons", "Energy needed to separate nucleons", "Energy from chemical bonds", "Energy of motion"],
                correct: 1,
                difficulty: "hard",
                explanation: "Binding energy is the energy required to completely separate all nucleons in a nucleus."
            }
        ],
        
        space: [
            // EASY QUESTIONS (10)
            {
                question: "What is the closest star to Earth?",
                options: ["Alpha Centauri", "The Sun", "Polaris", "Sirius"],
                correct: 1,
                difficulty: "easy",
                explanation: "The Sun is our closest star, much closer than any other star."
            },
            {
                question: "How many planets are in our solar system?",
                options: ["7", "8", "9", "10"],
                correct: 1,
                difficulty: "easy",
                explanation: "There are eight planets in our solar system (Pluto is now classified as a dwarf planet)."
            },
            {
                question: "Which planet is closest to the Sun?",
                options: ["Venus", "Earth", "Mercury", "Mars"],
                correct: 2,
                difficulty: "easy",
                explanation: "Mercury is the closest planet to the Sun."
            },
            {
                question: "Which planet is largest in our solar system?",
                options: ["Saturn", "Jupiter", "Neptune", "Earth"],
                correct: 1,
                difficulty: "easy",
                explanation: "Jupiter is the largest planet in our solar system."
            },
            {
                question: "What causes day and night?",
                options: ["Earth's orbit around Sun", "Earth's rotation on its axis", "Moon's orbit around Earth", "Sun's movement"],
                correct: 1,
                difficulty: "medium",
                explanation: "Day and night are caused by Earth rotating on its axis every 24 hours."
            },
            {
                question: "How long does it take Earth to orbit the Sun?",
                options: ["1 month", "1 year", "1 day", "1 week"],
                correct: 1,
                difficulty: "easy",
                explanation: "Earth takes one year (365.25 days) to complete one orbit around the Sun."
            },
            {
                question: "What is the Moon?",
                options: ["A planet", "A star", "Earth's natural satellite", "An asteroid"],
                correct: 2,
                difficulty: "easy",
                explanation: "The Moon is Earth's only natural satellite."
            },
            {
                question: "What causes the seasons on Earth?",
                options: ["Distance from Sun", "Earth's tilted axis", "Moon's gravity", "Solar flares"],
                correct: 1,
                difficulty: "easy",
                explanation: "Seasons are caused by Earth's axis being tilted relative to its orbit."
            },
            {
                question: "What is a galaxy?",
                options: ["Group of planets", "Group of moons", "Group of billions of stars", "Group of asteroids"],
                correct: 2,
                difficulty: "easy",
                explanation: "A galaxy is a collection of billions of stars, gas, and dust held together by gravity."
            },
            {
                question: "What galaxy do we live in?",
                options: ["Andromeda", "Milky Way", "Whirlpool", "Spiral"],
                correct: 1,
                difficulty: "easy",
                explanation: "We live in the Milky Way galaxy."
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "What keeps planets in orbit around the Sun?",
                options: ["Magnetism", "Gravity", "Electric force", "Nuclear force"],
                correct: 1,
                difficulty: "medium",
                explanation: "Gravitational attraction between the Sun and planets keeps them in orbit."
            },
            {
                question: "What is a light year?",
                options: ["Time for light to travel one year", "Distance light travels in one year", "Age of light", "Speed of light"],
                correct: 1,
                difficulty: "medium",
                explanation: "A light year is the distance light travels in one year (about 9.5 trillion km)."
            },
            {
                question: "What is a solar eclipse?",
                options: ["Earth blocks sunlight to Moon", "Moon blocks sunlight to Earth", "Sun blocks light to Earth", "Earth blocks light to Sun"],
                correct: 1,
                difficulty: "medium",
                explanation: "A solar eclipse occurs when the Moon passes between Earth and Sun, blocking sunlight."
            },
            {
                question: "What is a lunar eclipse?",
                options: ["Moon blocks sunlight to Earth", "Earth blocks sunlight to Moon", "Sun blocks light to Moon", "Moon disappears"],
                correct: 1,
                difficulty: "medium",
                explanation: "A lunar eclipse occurs when Earth blocks sunlight from reaching the Moon."
            },
            {
                question: "What are the inner planets made mostly of?",
                options: ["Gas", "Ice", "Rock and metal", "Liquid"],
                correct: 2,
                difficulty: "medium",
                explanation: "The inner planets (Mercury, Venus, Earth, Mars) are rocky planets."
            },
            {
                question: "What are the outer planets made mostly of?",
                options: ["Rock", "Metal", "Gas and ice", "Solid carbon"],
                correct: 2,
                difficulty: "medium",
                explanation: "The outer planets (Jupiter, Saturn, Uranus, Neptune) are gas giants."
            },
            {
                question: "What is the asteroid belt?",
                options: ["Ring around Saturn", "Region between Mars and Jupiter", "Edge of solar system", "Around Earth"],
                correct: 1,
                difficulty: "medium",
                explanation: "The asteroid belt is a region of space between Mars and Jupiter containing many asteroids."
            },
            {
                question: "What powers the Sun?",
                options: ["Burning coal", "Nuclear fission", "Nuclear fusion", "Chemical reactions"],
                correct: 2,
                difficulty: "medium",
                explanation: "The Sun generates energy through nuclear fusion, combining hydrogen into helium."
            },
            {
                question: "What is the main sequence stage of a star?",
                options: ["When star is forming", "When star is fusing hydrogen", "When star is dying", "When star explodes"],
                correct: 1,
                difficulty: "medium",
                explanation: "Main sequence is the longest stage when stars fuse hydrogen in their cores."
            },
            {
                question: "What happens to a massive star at the end of its life?",
                options: ["Becomes white dwarf", "Explodes as supernova", "Just fades away", "Becomes planet"],
                correct: 1,
                difficulty: "medium",
                explanation: "Very massive stars end their lives in supernova explosions."
            },
            {
                question: "What is a nebula?",
                options: ["Dead star", "Planet forming", "Cloud of gas and dust", "Type of galaxy"],
                correct: 2,
                difficulty: "medium",
                explanation: "A nebula is a cloud of gas and dust in space, often where stars form."
            },
            
            // HARD QUESTIONS (4)
            {
                question: "What is the escape velocity from Earth?",
                options: ["11.2 km/s", "9.8 m/s", "300,000 km/s", "7.9 km/s"],
                correct: 0,
                difficulty: "hard",
                explanation: "Escape velocity from Earth is 11.2 km/s - the minimum speed to escape Earth's gravity."
            },
            {
                question: "What is a black hole?",
                options: ["Hole in space", "Region where gravity is so strong light cannot escape", "Absence of matter", "Dark planet"],
                correct: 1,
                difficulty: "hard",
                explanation: "A black hole is a region where gravity is so strong that nothing, not even light, can escape."
            },
            {
                question: "What is the Hubble constant?",
                options: ["Speed of light", "Rate of universe expansion", "Age of universe", "Size of universe"],
                correct: 1,
                difficulty: "hard",
                explanation: "The Hubble constant describes how fast the universe is expanding."
            },
            {
                question: "What evidence supports the Big Bang theory?",
                options: ["Cosmic microwave background radiation", "Universal expansion", "Abundance of light elements", "All of the above"],
                correct: 3,
                difficulty: "hard",
                explanation: "Multiple lines of evidence support Big Bang theory: CMB radiation, expansion, and element abundance."
            }
        ],
        
        thermal: [
            // EASY QUESTIONS (10)
            {
                question: "What is temperature?",
                options: ["Total energy of particles", "Average kinetic energy of particles", "Number of particles", "Size of particles"],
                correct: 1,
                difficulty: "medium",
                explanation: "Temperature is a measure of the average kinetic energy of particles in a substance."
            },
            {
                question: "What is heat?",
                options: ["Same as temperature", "Energy transfer due to temperature difference", "Amount of matter", "Type of particle"],
                correct: 1,
                difficulty: "easy",
                explanation: "Heat is energy that transfers from hot objects to cold objects."
            },
            {
                question: "What is the unit of temperature?",
                options: ["Joule", "Kelvin", "Newton", "Watt"],
                correct: 1,
                difficulty: "easy",
                explanation: "Temperature is measured in Kelvin (K), though Celsius (°C) is also common."
            },
            {
                question: "What is absolute zero?",
                options: ["0°C", "0°F", "0 K", "Room temperature"],
                correct: 2,
                difficulty: "easy",
                explanation: "Absolute zero is 0 Kelvin (-273°C), the lowest possible temperature."
            },
            {
                question: "What happens to particles as temperature increases?",
                options: ["They slow down", "They speed up", "Nothing changes", "They disappear"],
                correct: 1,
                difficulty: "easy",
                explanation: "Higher temperature means particles have more kinetic energy and move faster."
            },
            {
                question: "In which direction does heat naturally flow?",
                options: ["From cold to hot", "From hot to cold", "Both directions equally", "Heat doesn't flow"],
                correct: 1,
                difficulty: "easy",
                explanation: "Heat naturally flows from hotter objects to colder objects."
            },
            {
                question: "What is thermal expansion?",
                options: ["Objects getting heavier when heated", "Objects getting lighter when heated", "Objects getting larger when heated", "Objects changing color when heated"],
                correct: 2,
                difficulty: "easy",
                explanation: "Thermal expansion is the increase in size of materials when heated."
            },
            {
                question: "Why do most materials expand when heated?",
                options: ["They absorb air", "Particles move more and need more space", "They get heavier", "They change composition"],
                correct: 1,
                difficulty: "easy",
                explanation: "Faster-moving particles at higher temperatures require more space."
            },
            {
                question: "What is a thermometer used for?",
                options: ["Measuring heat", "Measuring temperature", "Measuring pressure", "Measuring volume"],
                correct: 1,
                difficulty: "easy",
                explanation: "A thermometer measures temperature, not heat energy itself."
            },
            {
                question: "What happens to the volume of most liquids when heated?",
                options: ["Increases", "Decreases", "Stays same", "Becomes zero"],
                correct: 0,
                difficulty: "easy",
                explanation: "Most liquids expand (increase in volume) when heated."
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "What is conduction?",
                options: ["Heat transfer through fluids", "Heat transfer through electromagnetic waves", "Heat transfer through direct contact", "Heat transfer through space"],
                correct: 2,
                difficulty: "easy",
                explanation: "Conduction is heat transfer through direct contact between particles."
            },
            {
                question: "What is convection?",
                options: ["Heat transfer through direct contact", "Heat transfer through moving fluids", "Heat transfer through waves", "Heat transfer through space"],
                correct: 1,
                difficulty: "easy",
                explanation: "Convection is heat transfer through the movement of fluids (liquids and gases)."
            },
            {
                question: "Which type of heat transfer can occur through a vacuum?",
                options: ["Conduction", "Convection", "Radiation", "None"],
                correct: 2,
                difficulty: "medium",
                explanation: "Radiation can travel through a vacuum as it doesn't require particles - this is how we get heat from the Sun."
            },
            {
                question: "Which materials are good thermal conductors?",
                options: ["Metals", "Plastics", "Wood", "Air"],
                correct: 0,
                difficulty: "medium",
                explanation: "Metals are excellent thermal conductors due to free electrons that can transfer energy."
            },
            {
                question: "Which materials are good thermal insulators?",
                options: ["Metals", "Air and gases", "Water", "Glass"],
                correct: 1,
                difficulty: "medium",
                explanation: "Gases like air are excellent insulators because particles are far apart."
            },
            {
                question: "How does convection work?",
                options: ["Hot fluid rises, cold fluid sinks", "All fluid moves randomly", "Only hot fluid moves", "Only cold fluid moves"],
                correct: 0,
                difficulty: "medium",
                explanation: "Convection occurs because hot fluid is less dense and rises, while cold fluid sinks."
            },
            {
                question: "What is specific heat capacity?",
                options: ["Total heat in object", "Heat needed to raise 1kg by 1°C", "Heat needed to melt object", "Heat needed to boil object"],
                correct: 1,
                difficulty: "medium",
                explanation: "Specific heat capacity is the energy needed to raise 1kg of material by 1°C."
            },
            {
                question: "Which has higher specific heat capacity: water or metal?",
                options: ["Metal", "Water", "Both equal", "Depends on temperature"],
                correct: 1,
                difficulty: "medium",
                explanation: "Water has a very high specific heat capacity, much higher than most metals."
            },
            {
                question: "Why do coastal areas have milder temperatures?",
                options: ["Ocean currents", "Water's high specific heat capacity", "Sea breezes", "Salt in water"],
                correct: 1,
                difficulty: "medium",
                explanation: "Water's high specific heat capacity means oceans heat up and cool down slowly, moderating temperatures."
            },
            {
                question: "What is thermal equilibrium?",
                options: ["Objects at same temperature", "Objects transferring no net heat", "Both A and B", "Objects at absolute zero"],
                correct: 2,
                difficulty: "medium",
                explanation: "Thermal equilibrium means objects are at the same temperature with no net heat transfer."
            },
            {
                question: "How does a thermos flask work?",
                options: ["Prevents all heat transfer methods", "Only prevents conduction", "Only prevents convection", "Only prevents radiation"],
                correct: 0,
                difficulty: "medium",
                explanation: "A thermos flask is designed to minimize conduction, convection, and radiation."
            },
            
            // HARD QUESTIONS (4)
            {
                question: "How much energy is needed to raise 2kg of water by 10°C? (c = 4200 J/kg°C)",
                options: ["84,000 J", "8,400 J", "42,000 J", "4,200 J"],
                correct: 0,
                difficulty: "hard",
                explanation: "Q = mcΔT = 2 kg × 4200 J/kg°C × 10°C = 84,000 J"
            },
            {
                question: "What is the kinetic theory of matter?",
                options: ["Matter is made of moving particles", "All matter moves at same speed", "Matter doesn't move", "Only hot matter moves"],
                correct: 0,
                difficulty: "hard",
                explanation: "Kinetic theory states that all matter consists of particles in constant motion."
            },
            {
                question: "Why do gases exert pressure?",
                options: ["They are heavy", "Particles collide with container walls", "They expand", "They are hot"],
                correct: 1,
                difficulty: "hard",
                explanation: "Gas pressure results from countless particle collisions with container walls."
            },
            {
                question: "What happens to gas pressure if temperature doubles (at constant volume)?",
                options: ["Pressure halves", "Pressure doubles", "Pressure stays same", "Pressure becomes zero"],
                correct: 1,
                difficulty: "hard",
                explanation: "At constant volume, pressure is directly proportional to absolute temperature (Gay-Lussac's law)."
            }
        ],
        
        statesOfMatter: [
            // EASY QUESTIONS (10)
            {
                question: "What are the three main states of matter?",
                options: ["Solid, liquid, plasma", "Solid, liquid, gas", "Gas, plasma, liquid", "Ice, water, steam"],
                correct: 1,
                difficulty: "easy",
                explanation: "The three main states of matter are solid, liquid, and gas."
            },
            {
                question: "In which state are particles closest together?",
                options: ["Solid", "Liquid", "Gas", "Plasma"],
                correct: 0,
                difficulty: "easy",
                explanation: "Solid particles are most closely packed together in regular arrangements."
            },
            {
                question: "In which state do particles move most freely?",
                options: ["Solid", "Liquid", "Gas", "All equal"],
                correct: 2,
                difficulty: "easy",
                explanation: "Gas particles move most freely with no fixed positions."
            },
            {
                question: "What is the melting point of ice at standard pressure?",
                options: ["0°C", "100°C", "32°C", "-273°C"],
                correct: 0,
                difficulty: "easy",
                explanation: "Ice melts at 0°C (32°F) at standard atmospheric pressure."
            },
            {
                question: "What is the boiling point of water at standard pressure?",
                options: ["0°C", "50°C", "100°C", "200°C"],
                correct: 2,
                difficulty: "easy",
                explanation: "Water boils at 100°C (212°F) at standard atmospheric pressure."
            },
            {
                question: "What happens during melting?",
                options: ["Solid becomes liquid", "Liquid becomes gas", "Gas becomes liquid", "Liquid becomes solid"],
                correct: 0,
                difficulty: "easy",
                explanation: "Melting is the change from solid state to liquid state."
            },
            {
                question: "What happens during freezing?",
                options: ["Solid becomes liquid", "Liquid becomes solid", "Gas becomes liquid", "Liquid becomes gas"],
                correct: 1,
                difficulty: "easy",
                explanation: "Freezing is the change from liquid state to solid state."
            },
            {
                question: "What happens during boiling?",
                options: ["Solid becomes liquid", "Liquid becomes solid", "Liquid becomes gas", "Gas becomes liquid"],
                correct: 2,
                difficulty: "easy",
                explanation: "Boiling is the change from liquid state to gas state."
            },
            {
                question: "How are particles arranged in a gas?",
                options: ["Random and far apart", "Random and close together", "Regular pattern and close together", "Regular pattern and far apart"],
                correct: 0,
                difficulty: "easy",
                explanation: "In gases, particles are randomly arranged and far apart."
            },
            {
                question: "How are particles arranged in a solid?",
                options: ["Random and far apart", "Random and close together", "Regular pattern and close together", "Regular pattern and far apart"],
                correct: 2,
                difficulty: "easy",
                explanation: "In solids, particles are arranged in regular patterns and are close together."
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "What is sublimation?",
                options: ["Solid to liquid", "Liquid to gas", "Solid directly to gas", "Gas to liquid"],
                correct: 2,
                difficulty: "medium",
                explanation: "Sublimation is the direct change from solid to gas, like dry ice."
            },
            {
                question: "What happens to particle speed when temperature increases?",
                options: ["Particles slow down", "Particles speed up", "No change", "Particles stop"],
                correct: 1,
                difficulty: "easy",
                explanation: "Higher temperature means particles have more kinetic energy and move faster."
            },
            {
                question: "What is condensation?",
                options: ["Gas to liquid", "Liquid to gas", "Solid to liquid", "Liquid to solid"],
                correct: 0,
                difficulty: "medium",
                explanation: "Condensation is the change from gas state to liquid state."
            },
            {
                question: "What is evaporation?",
                options: ["Liquid to gas at any temperature", "Liquid to gas at boiling point only", "Solid to gas", "Gas to liquid"],
                correct: 0,
                difficulty: "medium",
                explanation: "Evaporation is the change from liquid to gas that can occur at any temperature."
            },
            {
                question: "Why does evaporation cause cooling?",
                options: ["Water is cold", "Fastest particles leave, average energy decreases", "Air becomes cold", "Temperature doesn't change"],
                correct: 1,
                difficulty: "medium",
                explanation: "The fastest (highest energy) particles escape, leaving behind slower particles with lower average energy."
            },
            {
                question: "What happens to volume when a liquid becomes a gas?",
                options: ["Increases greatly", "Decreases", "Stays same", "Becomes zero"],
                correct: 0,
                difficulty: "medium",
                explanation: "Gas particles are much further apart, so volume increases dramatically."
            },
            {
                question: "What is Brownian motion?",
                options: ["Movement of large objects", "Random motion of small particles in fluid", "Motion of planets", "Movement of liquids"],
                correct: 1,
                difficulty: "medium",
                explanation: "Brownian motion is the random movement of tiny particles due to collisions with fluid molecules."
            },
            {
                question: "How does pressure affect boiling point?",
                options: ["Higher pressure raises boiling point", "Higher pressure lowers boiling point", "No effect", "Pressure only affects solids"],
                correct: 0,
                difficulty: "medium",
                explanation: "Higher pressure makes it harder for molecules to escape, raising the boiling point."
            },
            {
                question: "Why do solids have definite shape?",
                options: ["Particles are fixed in position", "Particles move freely", "Particles are far apart", "Particles are very fast"],
                correct: 0,
                difficulty: "medium",
                explanation: "In solids, particles are held in fixed positions by strong intermolecular forces."
            },
            {
                question: "Why do liquids take the shape of their container?",
                options: ["Particles are fixed", "Particles can move but stay close", "Particles are far apart", "Particles don't move"],
                correct: 1,
                difficulty: "medium",
                explanation: "Liquid particles can move and slide past each other while remaining close together."
            },
            {
                question: "What is diffusion?",
                options: ["Particles spreading out", "Particles coming together", "Particles disappearing", "Particles changing state"],
                correct: 0,
                difficulty: "medium",
                explanation: "Diffusion is the spreading of particles from areas of high concentration to low concentration."
            },
            
            // HARD QUESTIONS (4)
            {
                question: "What is the kinetic molecular theory?",
                options: ["Particles are stationary", "Particles are in constant random motion", "Only hot particles move", "Particles move in patterns"],
                correct: 1,
                difficulty: "hard",
                explanation: "Kinetic molecular theory states that all particles are in constant, random motion."
            },
            {
                question: "How does kinetic energy relate to temperature?",
                options: ["No relationship", "Directly proportional", "Inversely proportional", "Randomly related"],
                correct: 1,
                difficulty: "hard",
                explanation: "Average kinetic energy of particles is directly proportional to absolute temperature."
            },
            {
                question: "What is plasma?",
                options: ["Fourth state of matter with ionized particles", "Very hot gas", "Very cold solid", "Type of liquid"],
                correct: 0,
                difficulty: "hard",
                explanation: "Plasma is the fourth state of matter consisting of ionized particles (electrons and ions)."
            },
            {
                question: "Why does ice float on water?",
                options: ["Ice is lighter", "Ice is less dense than water", "Ice contains air", "Water pushes ice up"],
                correct: 1,
                difficulty: "hard",
                explanation: "Ice has a lower density than liquid water due to its crystal structure, so it floats."
            }
        ]
    },
    
    chemistry: {
        atomicStructure: [
            // EASY QUESTIONS (10)
            {
                question: "What is the chemical formula for water?",
                options: ["H2O", "CO2", "NaCl", "O2"],
                correct: 0,
                difficulty: "easy",
                explanation: "Water consists of 2 hydrogen atoms and 1 oxygen atom: H2O."
            },
            {
                question: "What determines an element's identity?",
                options: ["Number of neutrons", "Number of protons", "Number of electrons", "Atomic mass"],
                correct: 1,
                difficulty: "easy",
                explanation: "The number of protons (atomic number) determines what element an atom is."
            },
            {
                question: "Where is most of an atom's mass located?",
                options: ["In the electron shells", "In the nucleus", "Evenly distributed", "In the electron cloud"],
                correct: 1,
                difficulty: "easy",
                explanation: "Most of an atom's mass is concentrated in the nucleus, which contains protons and neutrons."
            },
            {
                question: "What charge does the nucleus of an atom have?",
                options: ["Negative", "Positive", "Neutral", "Variable"],
                correct: 1,
                difficulty: "easy",
                explanation: "The nucleus contains protons (positive) and neutrons (neutral), giving it an overall positive charge."
            },
            {
                question: "What are the electron shells also called?",
                options: ["Energy levels", "Orbits", "Rings", "All of the above"],
                correct: 3,
                difficulty: "easy",
                explanation: "Electron shells are also called energy levels, orbits, or rings."
            },
            {
                question: "How many electrons can the first shell hold?",
                options: ["2", "8", "18", "32"],
                correct: 0,
                difficulty: "medium",
                explanation: "The first electron shell can hold a maximum of 2 electrons."
            },
            {
                question: "How many electrons can the second shell hold?",
                options: ["2", "8", "18", "32"],
                correct: 1,
                difficulty: "easy",
                explanation: "The second electron shell can hold a maximum of 8 electrons."
            },
            {
                question: "What is the atomic number of carbon?",
                options: ["4", "6", "12", "14"],
                correct: 1,
                difficulty: "easy",
                explanation: "Carbon has 6 protons, so its atomic number is 6."
            },
            {
                question: "What makes atoms of the same element identical?",
                options: ["Same number of neutrons", "Same number of protons", "Same number of electrons", "Same mass"],
                correct: 1,
                difficulty: "easy",
                explanation: "Atoms of the same element always have the same number of protons."
            },
            {
                question: "What is the mass number of an atom?",
                options: ["Number of protons", "Number of electrons", "Number of protons + neutrons", "Number of neutrons"],
                correct: 2,
                difficulty: "easy",
                explanation: "Mass number is the sum of protons and neutrons in the nucleus."
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "What is the electron arrangement of sodium (atomic number 11)?",
                options: ["2,8,1", "2,8,8,1", "2,9", "11"],
                correct: 0,
                difficulty: "medium",
                explanation: "Sodium has 11 electrons arranged as 2,8,1 in the shells."
            },
            {
                question: "What is the electron arrangement of chlorine (atomic number 17)?",
                options: ["2,8,7", "2,7,8", "2,8,8,1", "17"],
                correct: 0,
                difficulty: "medium",
                explanation: "Chlorine has 17 electrons arranged as 2,8,7 in the shells."
            },
            {
                question: "How are elements arranged in the periodic table?",
                options: ["By mass number", "By atomic number", "By number of neutrons", "Alphabetically"],
                correct: 1,
                difficulty: "medium",
                explanation: "Elements in the periodic table are arranged in order of increasing atomic number."
            },
            {
                question: "What are vertical columns in the periodic table called?",
                options: ["Periods", "Groups", "Series", "Families"],
                correct: 1,
                difficulty: "medium",
                explanation: "Vertical columns are called groups (or families)."
            },
            {
                question: "What are horizontal rows in the periodic table called?",
                options: ["Groups", "Periods", "Series", "Families"],
                correct: 1,
                difficulty: "medium",
                explanation: "Horizontal rows are called periods."
            },
            {
                question: "What do elements in the same group have in common?",
                options: ["Same number of protons", "Same number of outer electrons", "Same mass", "Same number of neutrons"],
                correct: 1,
                difficulty: "medium",
                explanation: "Elements in the same group have the same number of electrons in their outer shell."
            },
            {
                question: "What do elements in the same period have in common?",
                options: ["Same number of electron shells", "Same number of protons", "Same properties", "Same mass"],
                correct: 0,
                difficulty: "medium",
                explanation: "Elements in the same period have the same number of electron shells."
            },
            {
                question: "Where are metals located on the periodic table?",
                options: ["Right side", "Left side and center", "Top only", "Bottom only"],
                correct: 1,
                difficulty: "medium",
                explanation: "Metals are found on the left side and center of the periodic table."
            },
            {
                question: "Where are non-metals located on the periodic table?",
                options: ["Left side", "Right side", "Center only", "Top only"],
                correct: 1,
                difficulty: "medium",
                explanation: "Non-metals are found on the right side of the periodic table."
            },
            {
                question: "What is the relative atomic mass?",
                options: ["Number of protons", "Average mass of atoms compared to carbon-12", "Number of neutrons", "Total number of particles"],
                correct: 1,
                difficulty: "medium",
                explanation: "Relative atomic mass is the average mass of atoms compared to 1/12 of carbon-12."
            },
            {
                question: "Why do atoms have no overall charge?",
                options: ["No charged particles", "Equal numbers of protons and electrons", "Only neutrons present", "Charges cancel in nucleus"],
                correct: 1,
                difficulty: "medium",
                explanation: "Atoms are neutral because they have equal numbers of protons (+) and electrons (-)."
            },
            
            // HARD QUESTIONS (4)
            {
                question: "What are isotopes?",
                options: ["Atoms with same protons, different neutrons", "Atoms with same neutrons, different protons", "Atoms with same electrons", "Different elements"],
                correct: 0,
                difficulty: "hard",
                explanation: "Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons."
            },
            {
                question: "Carbon-12 and Carbon-14 are isotopes. How do they differ?",
                options: ["Different number of protons", "Different number of electrons", "Different number of neutrons", "Different electron arrangement"],
                correct: 2,
                difficulty: "hard",
                explanation: "Carbon-12 has 6 neutrons, Carbon-14 has 8 neutrons (both have 6 protons)."
            },
            {
                question: "What is the electronic structure of oxygen (atomic number 8)?",
                options: ["2,6", "2,8", "8", "2,4"],
                correct: 0,
                difficulty: "hard",
                explanation: "Oxygen has 8 electrons arranged as 2,6 in the first and second shells."
            },
            {
                question: "Why do isotopes of the same element have identical chemical properties?",
                options: ["Same mass number", "Same number of neutrons", "Same number of protons and electrons", "Same atomic mass"],
                correct: 2,
                difficulty: "hard",
                explanation: "Chemical properties depend on electron arrangement, which is determined by the number of protons (and thus electrons in neutral atoms)."
            }
        ],
        
        bonding: [
            // EASY QUESTIONS (10)
            {
                question: "What type of bond forms between metals and non-metals?",
                options: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
                correct: 1,
                difficulty: "medium",
                explanation: "Ionic bonds form when electrons are transferred from metals to non-metals."
            },
            {
                question: "What is an ion?",
                options: ["Neutral atom", "Charged atom or group of atoms", "Type of bond", "Electron shell"],
                correct: 1,
                difficulty: "easy",
                explanation: "An ion is an atom or group of atoms that has gained or lost electrons and has a charge."
            },
            {
                question: "What charge do metal ions typically have?",
                options: ["Negative", "Positive", "Neutral", "Variable"],
                correct: 1,
                difficulty: "easy",
                explanation: "Metal atoms lose electrons to form positive ions (cations)."
            },
            {
                question: "What charge do non-metal ions typically have?",
                options: ["Positive", "Negative", "Neutral", "Variable"],
                correct: 1,
                difficulty: "easy",
                explanation: "Non-metal atoms gain electrons to form negative ions (anions)."
            },
            {
                question: "What is the formula for sodium chloride?",
                options: ["NaCl", "NaCl2", "Na2Cl", "NaC"],
                correct: 0,
                difficulty: "easy",
                explanation: "Sodium chloride has the formula NaCl (one sodium ion, one chloride ion)."
            },
            {
                question: "Why do atoms form bonds?",
                options: ["To increase mass", "To achieve stable electron arrangements", "To become radioactive", "To change identity"],
                correct: 1,
                difficulty: "medium",
                explanation: "Atoms form bonds to achieve stable electron arrangements, often a full outer shell."
            },
            {
                question: "What is a covalent bond?",
                options: ["Transfer of electrons", "Sharing of electrons", "Loss of electrons", "Gain of protons"],
                correct: 1,
                difficulty: "easy",
                explanation: "A covalent bond forms when atoms share electrons."
            },
            {
                question: "What type of bond forms between two non-metals?",
                options: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
                correct: 1,
                difficulty: "easy",
                explanation: "Covalent bonds typically form between non-metal atoms."
            },
            {
                question: "What is the charge on a sodium ion?",
                options: ["+1", "-1", "+2", "-2"],
                correct: 0,
                difficulty: "easy",
                explanation: "Sodium loses one electron to form Na⁺ with a +1 charge."
            },
            {
                question: "What is the charge on a chloride ion?",
                options: ["+1", "-1", "+2", "-2"],
                correct: 1,
                difficulty: "easy",
                explanation: "Chlorine gains one electron to form Cl⁻ with a -1 charge."
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "What happens to electrons in ionic bonding?",
                options: ["Shared equally", "Transferred from metal to non-metal", "Destroyed", "Stay in same atom"],
                correct: 1,
                difficulty: "medium",
                explanation: "In ionic bonding, electrons are transferred from metal atoms to non-metal atoms."
            },
            {
                question: "What happens to electrons in covalent bonding?",
                options: ["Transferred completely", "Shared between atoms", "Lost entirely", "Gained by both atoms"],
                correct: 1,
                difficulty: "medium",
                explanation: "In covalent bonding, electrons are shared between the bonded atoms."
            },
            {
                question: "What is a molecule?",
                options: ["Single atom", "Group of atoms joined by covalent bonds", "Group of ions", "Mixture of elements"],
                correct: 1,
                difficulty: "medium",
                explanation: "A molecule is a group of atoms held together by covalent bonds."
            },
            {
                question: "What is the formula for water?",
                options: ["HO", "H2O", "H2O2", "HO2"],
                correct: 1,
                difficulty: "medium",
                explanation: "Water is H2O - two hydrogen atoms covalently bonded to one oxygen atom."
            },
            {
                question: "How many bonds does carbon typically form?",
                options: ["2", "3", "4", "5"],
                correct: 2,
                difficulty: "medium",
                explanation: "Carbon has 4 outer electrons and typically forms 4 covalent bonds."
            },
            {
                question: "What is a double bond?",
                options: ["Two separate bonds", "Sharing of 4 electrons", "Two ionic bonds", "Bond with two atoms"],
                correct: 1,
                difficulty: "medium",
                explanation: "A double bond involves sharing 4 electrons (2 pairs) between two atoms."
            },
            {
                question: "What type of structure do ionic compounds have?",
                options: ["Molecules", "Giant ionic lattice", "Single atoms", "Pairs of ions"],
                correct: 1,
                difficulty: "medium",
                explanation: "Ionic compounds form giant lattice structures with alternating positive and negative ions."
            },
            {
                question: "What type of structure do simple covalent compounds have?",
                options: ["Giant lattice", "Simple molecules", "Metallic structure", "Ionic lattice"],
                correct: 1,
                difficulty: "medium",
                explanation: "Simple covalent compounds exist as discrete molecules."
            },
            {
                question: "Why do ionic compounds conduct electricity when molten?",
                options: ["Electrons are free", "Ions are free to move", "Molecules can move", "Atoms vibrate"],
                correct: 1,
                difficulty: "medium",
                explanation: "In molten ionic compounds, ions are free to move and carry electric current."
            },
            {
                question: "Why don't simple molecular compounds conduct electricity?",
                options: ["No charged particles that can move", "Molecules are too big", "Bonds are too strong", "They're not metals"],
                correct: 0,
                difficulty: "medium",
                explanation: "Simple molecular compounds have no free-moving charged particles to carry current."
            },
            {
                question: "What is metallic bonding?",
                options: ["Sharing electrons between metals", "Transfer of electrons", "Sea of delocalized electrons", "Ionic attraction"],
                correct: 2,
                difficulty: "medium",
                explanation: "Metallic bonding involves a 'sea' of delocalized electrons that can move freely."
            },
            
            // HARD QUESTIONS (4)
            {
                question: "Why do Group 1 metals form +1 ions?",
                options: ["They have 1 proton", "They have 1 outer electron to lose", "They have 1 neutron", "They're in period 1"],
                correct: 1,
                difficulty: "hard",
                explanation: "Group 1 metals have 1 electron in their outer shell, which they lose to achieve a stable electronic structure."
            },
            {
                question: "Why do Group 7 non-metals form -1 ions?",
                options: ["They have 7 protons", "They need 1 electron to complete outer shell", "They have 7 neutrons", "They're in period 7"],
                correct: 1,
                difficulty: "hard",
                explanation: "Group 7 elements have 7 outer electrons and gain 1 electron to achieve a stable octet."
            },
            {
                question: "What is the formula for magnesium oxide?",
                options: ["MgO", "MgO2", "Mg2O", "Mg2O2"],
                correct: 0,
                difficulty: "hard",
                explanation: "Mg²⁺ and O²⁻ combine in 1:1 ratio to form MgO."
            },
            {
                question: "What is the formula for aluminum chloride?",
                options: ["AlCl", "AlCl2", "AlCl3", "Al2Cl3"],
                correct: 2,
                difficulty: "hard",
                explanation: "Al³⁺ needs three Cl⁻ ions to balance charge, giving AlCl3."
            }
        ],
        
        reactions: [
            // EASY QUESTIONS (10)
            {
                question: "What is a chemical reaction?",
                options: ["Mixing substances", "Breaking bonds and forming new ones", "Heating substances", "Dissolving substances"],
                correct: 1,
                difficulty: "easy",
                explanation: "A chemical reaction involves breaking existing bonds and forming new ones, creating new substances."
            },
            {
                question: "What is combustion?",
                options: ["Reaction with water", "Reaction with oxygen", "Reaction with acid", "Reaction with metal"],
                correct: 1,
                difficulty: "easy",
                explanation: "Combustion is a reaction with oxygen, usually producing heat and light."
            },
            {
                question: "What are the products of complete combustion of hydrocarbons?",
                options: ["Carbon monoxide and water", "Carbon dioxide and water", "Carbon and oxygen", "Carbon and water"],
                correct: 1,
                difficulty: "easy",
                explanation: "Complete combustion of hydrocarbons produces carbon dioxide and water."
            },
            {
                question: "What is needed for combustion to occur?",
                options: ["Fuel only", "Oxygen only", "Fuel, oxygen, and heat", "Heat only"],
                correct: 2,
                difficulty: "easy",
                explanation: "The fire triangle: fuel, oxygen, and heat are all needed for combustion."
            },
            {
                question: "What happens when magnesium burns in air?",
                options: ["Forms magnesium oxide", "Forms magnesium chloride", "Forms magnesium sulfate", "Nothing happens"],
                correct: 0,
                difficulty: "easy",
                explanation: "Magnesium + oxygen → magnesium oxide (MgO)"
            },
            {
                question: "What is a reactant?",
                options: ["Product of reaction", "Substance that reacts", "Catalyst", "Energy released"],
                correct: 1,
                difficulty: "easy",
                explanation: "Reactants are the starting substances that undergo chemical change."
            },
            {
                question: "What is a product?",
                options: ["Starting substance", "Substance formed in reaction", "Catalyst", "Energy needed"],
                correct: 1,
                difficulty: "easy",
                explanation: "Products are the new substances formed during a chemical reaction."
            },
            {
                question: "What does a chemical equation show?",
                options: ["Only reactants", "Only products", "Reactants and products", "Only catalysts"],
                correct: 2,
                difficulty: "easy",
                explanation: "Chemical equations show both reactants (left) and products (right) of reactions."
            },
            {
                question: "What does the arrow in a chemical equation represent?",
                options: ["Addition", "Equals", "Reaction direction", "Subtraction"],
                correct: 2,
                difficulty: "easy",
                explanation: "The arrow shows the direction of the reaction from reactants to products."
            },
            {
                question: "What is thermal decomposition?",
                options: ["Heating to combine substances", "Breaking down by heating", "Cooling substances", "Adding water"],
                correct: 1,
                difficulty: "easy",
                explanation: "Thermal decomposition is breaking down compounds by heating."
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "What is oxidation?",
                options: ["Gain of electrons", "Loss of electrons", "Gain of protons", "Loss of protons"],
                correct: 1,
                difficulty: "medium",
                explanation: "Oxidation is the loss of electrons (or gain of oxygen)."
            },
            {
                question: "What is reduction?",
                options: ["Gain of electrons", "Loss of electrons", "Gain of protons", "Loss of protons"],
                correct: 0,
                difficulty: "medium",
                explanation: "Reduction is the gain of electrons (or loss of oxygen)."
            },
            {
                question: "What is a catalyst?",
                options: ["Substance that is consumed in reaction", "Substance that speeds up reaction without being consumed", "Product of reaction", "Reactant in reaction"],
                correct: 1,
                difficulty: "medium",
                explanation: "A catalyst speeds up a chemical reaction without being consumed in the process."
            },
            {
                question: "What happens in a displacement reaction?",
                options: ["Two compounds swap parts", "More reactive element displaces less reactive", "Elements combine", "Compounds break down"],
                correct: 1,
                difficulty: "medium",
                explanation: "In displacement, a more reactive element displaces a less reactive one from a compound."
            },
            {
                question: "What type of reaction is: A + B → AB?",
                options: ["Decomposition", "Synthesis", "Displacement", "Combustion"],
                correct: 1,
                difficulty: "medium",
                explanation: "This is a synthesis (or combination) reaction where elements/compounds combine."
            },
            {
                question: "What type of reaction is: AB → A + B?",
                options: ["Synthesis", "Decomposition", "Displacement", "Combustion"],
                correct: 1,
                difficulty: "medium",
                explanation: "This is a decomposition reaction where a compound breaks down."
            },
            {
                question: "What is an exothermic reaction?",
                options: ["Reaction that absorbs heat", "Reaction that releases heat", "Reaction at high temperature", "Reaction with oxygen"],
                correct: 1,
                difficulty: "medium",
                explanation: "Exothermic reactions release heat energy to the surroundings."
            },
            {
                question: "What is an endothermic reaction?",
                options: ["Reaction that releases heat", "Reaction that absorbs heat", "Reaction at low temperature", "Reaction without oxygen"],
                correct: 1,
                difficulty: "medium",
                explanation: "Endothermic reactions absorb heat energy from the surroundings."
            },
            {
                question: "What happens to the temperature in an exothermic reaction?",
                options: ["Decreases", "Increases", "Stays same", "Fluctuates"],
                correct: 1,
                difficulty: "medium",
                explanation: "Temperature increases in exothermic reactions because heat is released."
            },
            {
                question: "What is the test for oxygen gas?",
                options: ["Glowing splint relights", "Limewater turns cloudy", "Pop sound with lighted splint", "Blue flame"],
                correct: 0,
                difficulty: "medium",
                explanation: "Oxygen gas relights a glowing splint."
            },
            {
                question: "What is the test for carbon dioxide?",
                options: ["Glowing splint relights", "Limewater turns cloudy", "Pop sound", "Squeaky pop"],
                correct: 1,
                difficulty: "medium",
                explanation: "Carbon dioxide turns limewater cloudy."
            },
            
            // HARD QUESTIONS (4)
            {
                question: "Balance this equation: Mg + O2 → MgO",
                options: ["Mg + O2 → MgO", "2Mg + O2 → 2MgO", "Mg + 2O2 → MgO", "Mg + O → MgO"],
                correct: 1,
                difficulty: "hard",
                explanation: "2Mg + O2 → 2MgO balances the equation with equal atoms on both sides."
            },
            {
                question: "What happens when zinc displaces copper from copper sulfate?",
                options: ["Zn + CuSO4 → ZnSO4 + Cu", "Zn + CuSO4 → ZnCu + SO4", "No reaction", "Zn + CuSO4 → ZnO + CuS"],
                correct: 0,
                difficulty: "hard",
                explanation: "Zinc is more reactive than copper, so: Zn + CuSO4 → ZnSO4 + Cu"
            },
            {
                question: "What is the word equation for photosynthesis?",
                options: ["Glucose + oxygen → carbon dioxide + water", "Carbon dioxide + water → glucose + oxygen", "Water + oxygen → glucose", "Glucose → carbon dioxide + water"],
                correct: 1,
                difficulty: "hard",
                explanation: "Photosynthesis: carbon dioxide + water (+ light energy) → glucose + oxygen"
            },
            {
                question: "What is conservation of mass in chemical reactions?",
                options: ["Mass increases", "Mass decreases", "Mass of reactants equals mass of products", "Mass disappears"],
                correct: 2,
                difficulty: "hard",
                explanation: "In chemical reactions, the total mass of reactants equals the total mass of products."
            }
        ],
        
        acidsAndBases: [
            // EASY QUESTIONS (10)
            {
                question: "What color does red litmus paper turn in an alkali?",
                options: ["Red", "Blue", "Green", "Yellow"],
                correct: 1,
                difficulty: "easy",
                explanation: "Red litmus paper turns blue in alkaline (basic) solutions."
            },
            {
                question: "What color does blue litmus paper turn in an acid?",
                options: ["Blue", "Red", "Green", "Yellow"],
                correct: 1,
                difficulty: "easy",
                explanation: "Blue litmus paper turns red in acidic solutions."
            },
            {
                question: "What is the pH of pure water?",
                options: ["0", "7", "14", "1"],
                correct: 1,
                difficulty: "easy",
                explanation: "Pure water has a pH of 7, which is neutral."
            },
            {
                question: "What pH range indicates an acid?",
                options: ["0-7", "7-14", "Less than 7", "Greater than 7"],
                correct: 2,
                difficulty: "easy",
                explanation: "Acids have pH values less than 7."
            },
            {
                question: "What pH range indicates an alkali?",
                options: ["Less than 7", "Greater than 7", "Exactly 7", "0-14"],
                correct: 1,
                difficulty: "easy",
                explanation: "Alkalis (bases) have pH values greater than 7."
            },
            {
                question: "What is a common household acid?",
                options: ["Soap", "Vinegar", "Bleach", "Baking soda"],
                correct: 1,
                difficulty: "easy",
                explanation: "Vinegar contains ethanoic acid and is acidic."
            },
            {
                question: "What is a common household alkali?",
                options: ["Lemon juice", "Soap", "Vinegar", "Cola"],
                correct: 1,
                difficulty: "easy",
                explanation: "Soap is alkaline and has a pH greater than 7."
            },
            {
                question: "What happens when an acid reacts with a base?",
                options: ["Explosion", "Neutralization", "No reaction", "Gas production only"],
                correct: 1,
                difficulty: "easy",
                explanation: "Acids and bases neutralize each other, forming salt and water."
            },
            {
                question: "What is formed when an acid neutralizes a base?",
                options: ["Salt and water", "Gas only", "Metal only", "Nothing"],
                correct: 0,
                difficulty: "easy",
                explanation: "Acid + base → salt + water"
            },
            {
                question: "What color is universal indicator in neutral solutions?",
                options: ["Red", "Blue", "Green", "Yellow"],
                correct: 2,
                difficulty: "easy",
                explanation: "Universal indicator is green in neutral solutions (pH 7)."
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "What ion do acids produce in water?",
                options: ["OH⁻", "H⁺", "Cl⁻", "Na⁺"],
                correct: 1,
                difficulty: "medium",
                explanation: "Acids produce hydrogen ions (H⁺) when dissolved in water."
            },
            {
                question: "What ion do bases produce in water?",
                options: ["H⁺", "OH⁻", "Cl⁻", "Na⁺"],
                correct: 1,
                difficulty: "medium",
                explanation: "Bases produce hydroxide ions (OH⁻) when dissolved in water."
            },
            {
                question: "What is formed when an acid reacts with a metal?",
                options: ["Salt and water", "Salt and hydrogen gas", "Only water", "Only gas"],
                correct: 1,
                difficulty: "medium",
                explanation: "Acid + metal → salt + hydrogen gas"
            },
            {
                question: "What is formed when an acid reacts with a carbonate?",
                options: ["Salt and water", "Salt, water, and carbon dioxide", "Only salt", "Only gas"],
                correct: 1,
                difficulty: "medium",
                explanation: "Acid + carbonate → salt + water + carbon dioxide"
            },
            {
                question: "What is the difference between strong and weak acids?",
                options: ["Concentration only", "Degree of ionization", "Temperature", "Color"],
                correct: 1,
                difficulty: "medium",
                explanation: "Strong acids ionize completely, weak acids only partially ionize in solution."
            },
            {
                question: "What color is universal indicator in strong acid?",
                options: ["Green", "Blue", "Red", "Purple"],
                correct: 2,
                difficulty: "medium",
                explanation: "Universal indicator is red in strong acidic solutions."
            },
            {
                question: "What color is universal indicator in strong alkali?",
                options: ["Red", "Green", "Purple", "Yellow"],
                correct: 2,
                difficulty: "medium",
                explanation: "Universal indicator is purple in strong alkaline solutions."
            },
            {
                question: "Which acid is found in car batteries?",
                options: ["Hydrochloric acid", "Sulfuric acid", "Nitric acid", "Ethanoic acid"],
                correct: 1,
                difficulty: "medium",
                explanation: "Car batteries contain sulfuric acid (H₂SO₄)."
            },
            {
                question: "What is the formula for hydrochloric acid?",
                options: ["HCl", "H2SO4", "HNO3", "CH3COOH"],
                correct: 0,
                difficulty: "medium",
                explanation: "Hydrochloric acid has the formula HCl."
            },
            {
                question: "What is an indicator?",
                options: ["Strong acid", "Substance that shows pH by color change", "Type of base", "Neutral solution"],
                correct: 1,
                difficulty: "medium",
                explanation: "Indicators show whether solutions are acidic, neutral, or alkaline by changing color."
            },
            {
                question: "What is the test for hydrogen gas?",
                options: ["Glowing splint relights", "Limewater turns cloudy", "Squeaky pop with lighted splint", "No test"],
                correct: 2,
                difficulty: "medium",
                explanation: "Hydrogen gas makes a squeaky pop sound when tested with a lighted splint."
            },
            
            // HARD QUESTIONS (4)
            {
                question: "What is the pH of a solution with H⁺ concentration of 10⁻³ mol/dm³?",
                options: ["3", "11", "0.001", "-3"],
                correct: 0,
                difficulty: "hard",
                explanation: "pH = -log[H⁺] = -log(10⁻³) = 3"
            },
            {
                question: "What happens to pH when an acid is diluted?",
                options: ["Decreases", "Increases toward 7", "Stays same", "Becomes negative"],
                correct: 1,
                difficulty: "hard",
                explanation: "Diluting an acid increases pH (makes it less acidic) toward neutral (pH 7)."
            },
            {
                question: "What is the relationship between H⁺ and OH⁻ in water at 25°C?",
                options: ["[H⁺] = [OH⁻]", "[H⁺] × [OH⁻] = 10⁻¹⁴", "[H⁺] > [OH⁻]", "No relationship"],
                correct: 1,
                difficulty: "hard",
                explanation: "In water at 25°C, [H⁺] × [OH⁻] = 10⁻¹⁴ (ion product of water)."
            },
            {
                question: "Complete the neutralization: HCl + NaOH →",
                options: ["NaCl + H2O", "NaH + ClOH", "Na + HClO", "NaClO + H2"],
                correct: 0,
                difficulty: "hard",
                explanation: "HCl + NaOH → NaCl + H₂O (acid + base → salt + water)"
            }
        ],
        
        metals: [
            // EASY QUESTIONS (10)
            {
                question: "What is the most reactive metal?",
                options: ["Iron", "Copper", "Potassium", "Gold"],
                correct: 2,
                difficulty: "medium",
                explanation: "Potassium is one of the most reactive metals and reacts violently with water."
            },
            {
                question: "What is rust?",
                options: ["Iron", "Iron oxide", "Iron sulfide", "Pure metal"],
                correct: 1,
                difficulty: "easy",
                explanation: "Rust is iron oxide, formed when iron reacts with oxygen and water."
            },
            {
                question: "What is needed for iron to rust?",
                options: ["Oxygen only", "Water only", "Both oxygen and water", "Heat only"],
                correct: 2,
                difficulty: "easy",
                explanation: "Iron rusts when both oxygen and water are present."
            },
            {
                question: "Which metal is least reactive?",
                options: ["Sodium", "Iron", "Gold", "Magnesium"],
                correct: 2,
                difficulty: "easy",
                explanation: "Gold is very unreactive and doesn't corrode or tarnish."
            },
            {
                question: "What are metals below hydrogen in the reactivity series called?",
                options: ["Reactive metals", "Unreactive metals", "Noble metals", "Alkali metals"],
                correct: 2,
                difficulty: "easy",
                explanation: "Metals below hydrogen in the reactivity series are called noble metals."
            },
            {
                question: "What happens when sodium reacts with water?",
                options: ["No reaction", "Slow bubbling", "Vigorous reaction producing hydrogen", "Explosion"],
                correct: 2,
                difficulty: "medium",
                explanation: "Sodium reacts vigorously with water, producing sodium hydroxide and hydrogen gas."
            },
            {
                question: "Which metal is extracted by electrolysis?",
                options: ["Iron", "Copper", "Aluminum", "Silver"],
                correct: 2,
                difficulty: "easy",
                explanation: "Aluminum is so reactive it must be extracted from its ore by electrolysis."
            },
            {
                question: "What type of oxide do metals form?",
                options: ["Acidic", "Basic", "Neutral", "No oxides"],
                correct: 1,
                difficulty: "easy",
                explanation: "Metal oxides are basic and react with acids to form salts."
            },
            {
                question: "What is an alloy?",
                options: ["Pure metal", "Metal compound", "Mixture of metals", "Non-metal element"],
                correct: 2,
                difficulty: "easy",
                explanation: "An alloy is a mixture of two or more metals, or a metal with a non-metal."
            },
            {
                question: "What is galvanizing?",
                options: ["Painting iron", "Coating iron with zinc", "Heating iron", "Mixing iron with carbon"],
                correct: 1,
                difficulty: "easy",
                explanation: "Galvanizing is coating iron with zinc to prevent rusting."
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "What is the reactivity series?",
                options: ["List of metals by density", "List of metals by reactivity", "List of metals by cost", "List of metals by color"],
                correct: 1,
                difficulty: "medium",
                explanation: "The reactivity series lists metals in order of their reactivity, from most to least reactive."
            },
            {
                question: "How can rusting be prevented?",
                options: ["Painting", "Galvanizing", "Oiling", "All of the above"],
                correct: 3,
                difficulty: "medium",
                explanation: "Rusting can be prevented by painting, galvanizing, oiling, or other barrier methods."
            },
            {
                question: "What happens when a more reactive metal is placed in a solution of a less reactive metal compound?",
                options: ["No reaction", "Displacement reaction occurs", "Both metals dissolve", "Explosion"],
                correct: 1,
                difficulty: "medium",
                explanation: "The more reactive metal displaces the less reactive metal from its compound."
            },
            {
                question: "Why are reactive metals found as compounds in nature?",
                options: ["They're more stable as compounds", "They don't exist as elements", "They're artificially made", "They're rare"],
                correct: 0,
                difficulty: "medium",
                explanation: "Reactive metals readily react with other elements, so they're found as stable compounds in nature."
            },
            {
                question: "How is iron extracted from iron ore?",
                options: ["Electrolysis", "Reduction with carbon", "Heating alone", "Reaction with water"],
                correct: 1,
                difficulty: "medium",
                explanation: "Iron is extracted by reducing iron oxide with carbon (or carbon monoxide) in a blast furnace."
            },
            {
                question: "What is reduction in terms of oxygen?",
                options: ["Gain of oxygen", "Loss of oxygen", "Gain of electrons", "Loss of electrons"],
                correct: 1,
                difficulty: "medium",
                explanation: "Reduction is the removal of oxygen from a compound."
            },
            {
                question: "What is oxidation in terms of oxygen?",
                options: ["Loss of oxygen", "Gain of oxygen", "Loss of electrons", "Gain of electrons"],
                correct: 1,
                difficulty: "medium",
                explanation: "Oxidation is the addition of oxygen to a substance."
            },
            {
                question: "What is the main ore of iron?",
                options: ["Bauxite", "Hematite", "Malachite", "Galena"],
                correct: 1,
                difficulty: "medium",
                explanation: "Hematite (Fe₂O₃) is the main ore of iron."
            },
            {
                question: "What is the main ore of aluminum?",
                options: ["Hematite", "Bauxite", "Malachite", "Galena"],
                correct: 1,
                difficulty: "medium",
                explanation: "Bauxite (Al₂O₃) is the main ore of aluminum."
            },
            {
                question: "Why is aluminum more expensive than iron?",
                options: ["It's rarer", "Extraction requires more energy", "It's more useful", "It's harder to find"],
                correct: 1,
                difficulty: "medium",
                explanation: "Aluminum extraction by electrolysis requires enormous amounts of electrical energy."
            },
            {
                question: "What is sacrificial protection?",
                options: ["Painting metals", "Using a more reactive metal to protect less reactive one", "Heating metals", "Mixing metals"],
                correct: 1,
                difficulty: "medium",
                explanation: "A more reactive metal corrodes instead of the protected metal."
            },
            
            // HARD QUESTIONS (4)
            {
                question: "Write the equation for the reaction of zinc with copper sulfate:",
                options: ["Zn + CuSO4 → ZnSO4 + Cu", "Zn + CuSO4 → ZnCu + SO4", "No reaction", "Zn + Cu → ZnCu"],
                correct: 0,
                difficulty: "hard",
                explanation: "Zinc is more reactive than copper: Zn + CuSO4 → ZnSO4 + Cu"
            },
            {
                question: "Why doesn't copper react with hydrochloric acid?",
                options: ["Copper is too reactive", "Copper is below hydrogen in reactivity series", "Acid is too weak", "Reaction is too slow"],
                correct: 1,
                difficulty: "hard",
                explanation: "Copper is below hydrogen in the reactivity series, so it cannot displace hydrogen from acids."
            },
            {
                question: "What happens in the thermite reaction?",
                options: ["Aluminum reduces iron oxide", "Iron reduces aluminum oxide", "Both metals melt", "No reaction occurs"],
                correct: 0,
                difficulty: "hard",
                explanation: "Aluminum is more reactive than iron, so it reduces iron oxide: 2Al + Fe₂O₃ → 2Fe + Al₂O₃"
            },
            {
                question: "Why can't carbon reduce aluminum oxide?",
                options: ["Carbon is unreactive", "Aluminum is more reactive than carbon", "Temperature too low", "No oxygen present"],
                correct: 1,
                difficulty: "hard",
                explanation: "Aluminum is more reactive than carbon, so carbon cannot reduce aluminum oxide."
            }
        ],
        
        organicChemistry: [
            // EASY QUESTIONS (10)
            {
                question: "What element is the basis of all organic compounds?",
                options: ["Hydrogen", "Oxygen", "Carbon", "Nitrogen"],
                correct: 2,
                difficulty: "easy",
                explanation: "Carbon is the basis of all organic compounds due to its ability to form four bonds."
            },
            {
                question: "What is the simplest hydrocarbon?",
                options: ["Ethane", "Methane", "Propane", "Butane"],
                correct: 1,
                difficulty: "easy",
                explanation: "Methane (CH₄) is the simplest hydrocarbon with one carbon and four hydrogen atoms."
            },
            {
                question: "What is the formula for methane?",
                options: ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
                correct: 0,
                difficulty: "easy",
                explanation: "Methane has the formula CH₄ - one carbon atom bonded to four hydrogen atoms."
            },
            {
                question: "What is crude oil mainly composed of?",
                options: ["Pure carbon", "Hydrocarbons", "Water", "Metals"],
                correct: 1,
                difficulty: "easy",
                explanation: "Crude oil is mainly composed of hydrocarbons - compounds containing only carbon and hydrogen."
            },
            {
                question: "What is a hydrocarbon?",
                options: ["Compound containing only carbon and hydrogen", "Compound containing hydrogen only", "Compound containing carbon only", "Any organic compound"],
                correct: 0,
                difficulty: "easy",
                explanation: "Hydrocarbons contain only carbon and hydrogen atoms."
            },
            {
                question: "What is the process of separating crude oil called?",
                options: ["Filtration", "Fractional distillation", "Crystallization", "Evaporation"],
                correct: 1,
                difficulty: "easy",
                explanation: "Crude oil is separated into fractions by fractional distillation based on boiling points."
            },
            {
                question: "What happens to boiling point as hydrocarbon chain length increases?",
                options: ["Increases", "Decreases", "Stays same", "Varies randomly"],
                correct: 0,
                difficulty: "easy",
                explanation: "Longer hydrocarbon chains have higher boiling points due to stronger intermolecular forces."
            },
            {
                question: "What is the formula for ethane?",
                options: ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
                correct: 1,
                difficulty: "easy",
                explanation: "Ethane has the formula C₂H₆ - two carbon atoms and six hydrogen atoms."
            },
            {
                question: "What type of bonds exist in alkanes?",
                options: ["Single bonds only", "Double bonds only", "Triple bonds only", "Mixed bonds"],
                correct: 0,
                difficulty: "easy",
                explanation: "Alkanes contain only single covalent bonds between carbon atoms."
            },
            {
                question: "What is natural gas mainly composed of?",
                options: ["Ethane", "Propane", "Methane", "Butane"],
                correct: 2,
                difficulty: "easy",
                explanation: "Natural gas is mainly methane (CH₄)."
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "What type of reaction occurs when hydrocarbons burn?",
                options: ["Substitution", "Addition", "Combustion", "Elimination"],
                correct: 2,
                difficulty: "medium",
                explanation: "When hydrocarbons burn in oxygen, combustion occurs, producing carbon dioxide and water."
            },
            {
                question: "What are alkenes?",
                options: ["Hydrocarbons with single bonds only", "Hydrocarbons with at least one double bond", "Hydrocarbons with triple bonds", "Hydrocarbons with rings"],
                correct: 1,
                difficulty: "medium",
                explanation: "Alkenes are hydrocarbons containing at least one C=C double bond."
            },
            {
                question: "What is the general formula for alkanes?",
                options: ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙHₙ"],
                correct: 0,
                difficulty: "medium",
                explanation: "Alkanes have the general formula CₙH₂ₙ₊₂ where n is the number of carbon atoms."
            },
            {
                question: "What is the general formula for alkenes?",
                options: ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙHₙ"],
                correct: 1,
                difficulty: "medium",
                explanation: "Alkenes have the general formula CₙH₂ₙ due to the presence of one double bond."
            },
            {
                question: "What is the test for alkenes?",
                options: ["Bromine water turns colorless", "Limewater turns cloudy", "Glowing splint relights", "Litmus paper changes color"],
                correct: 0,
                difficulty: "medium",
                explanation: "Alkenes decolorize bromine water (turns from orange to colorless)."
            },
            {
                question: "What is cracking?",
                options: ["Breaking large hydrocarbons into smaller ones", "Joining small hydrocarbons", "Removing hydrogen", "Adding oxygen"],
                correct: 0,
                difficulty: "medium",
                explanation: "Cracking breaks long-chain hydrocarbons into shorter, more useful ones."
            },
            {
                question: "Why is cracking important?",
                options: ["Produces more useful shorter hydrocarbons", "Makes oil cleaner", "Removes impurities", "Increases density"],
                correct: 0,
                difficulty: "medium",
                explanation: "Cracking converts less useful long-chain hydrocarbons into more useful shorter ones like petrol."
            },
            {
                question: "What is the simplest alkene?",
                options: ["Methene", "Ethene", "Propene", "Butene"],
                correct: 1,
                difficulty: "medium",
                explanation: "Ethene (C₂H₄) is the simplest alkene with one double bond."
            },
            {
                question: "What products are formed when ethane burns completely?",
                options: ["Carbon monoxide and water", "Carbon dioxide and water", "Carbon and hydrogen", "Only carbon dioxide"],
                correct: 1,
                difficulty: "medium",
                explanation: "Complete combustion: C₂H₆ + oxygen → 2CO₂ + 3H₂O"
            },
            {
                question: "What is polymerization?",
                options: ["Breaking polymers", "Joining small molecules to make large ones", "Separating compounds", "Crystallization"],
                correct: 1,
                difficulty: "medium",
                explanation: "Polymerization joins many small molecules (monomers) to form large molecules (polymers)."
            },
            {
                question: "What is the monomer used to make polyethene?",
                options: ["Methane", "Ethane", "Ethene", "Propene"],
                correct: 2,
                difficulty: "medium",
                explanation: "Ethene (C₂H₄) monomers join together to form polyethene."
            },
            
            // HARD QUESTIONS (4)
            {
                question: "Write the balanced equation for the complete combustion of propane:",
                options: ["C₃H₈ + 5O₂ → 3CO₂ + 4H₂O", "C₃H₈ + O₂ → CO₂ + H₂O", "C₃H₈ + 3O₂ → 3CO + 4H₂O", "C₃H₈ + 4O₂ → 3CO₂ + 4H₂O"],
                correct: 0,
                difficulty: "hard",
                explanation: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O (balanced equation)"
            },
            {
                question: "What happens during the addition reaction of ethene with bromine?",
                options: ["C₂H₄ + Br₂ → C₂H₄Br₂", "C₂H₄ + Br₂ → C₂H₂ + 2HBr", "No reaction", "C₂H₄ → C₂H₂ + H₂"],
                correct: 0,
                difficulty: "hard",
                explanation: "Ethene undergoes addition with bromine: C₂H₄ + Br₂ → C₂H₄Br₂"
            },
            {
                question: "What is the difference between saturated and unsaturated hydrocarbons?",
                options: ["Saturated have double bonds", "Unsaturated have only single bonds", "Saturated have only single bonds", "No difference"],
                correct: 2,
                difficulty: "hard",
                explanation: "Saturated hydrocarbons (alkanes) have only single bonds; unsaturated have multiple bonds."
            },
            {
                question: "What type of polymerization occurs with alkenes?",
                options: ["Condensation", "Addition", "Substitution", "Elimination"],
                correct: 1,
                difficulty: "hard",
                explanation: "Alkenes undergo addition polymerization where double bonds open to link monomers."
            }
        ],
        
        ratesOfReaction: [
            // EASY QUESTIONS (10)
            {
                question: "What is the rate of reaction?",
                options: ["How much product is formed", "How fast reactants are used up or products formed", "Temperature of reaction", "Energy needed"],
                correct: 1,
                difficulty: "easy",
                explanation: "Rate of reaction is how fast reactants are consumed or products are formed."
            },
            {
                question: "What happens to reaction rate when temperature increases?",
                options: ["Decreases", "Increases", "No effect", "Stops reaction"],
                correct: 1,
                difficulty: "easy",
                explanation: "Higher temperature increases particle energy and collision frequency, increasing reaction rate."
            },
            {
                question: "What happens to reaction rate when concentration increases?",
                options: ["Decreases", "Increases", "No effect", "Stops reaction"],
                correct: 1,
                difficulty: "easy",
                explanation: "Higher concentration means more particles in the same space, leading to more collisions and faster reaction."
            },
            {
                question: "How does surface area affect reaction rate?",
                options: ["Larger surface area decreases rate", "Larger surface area increases rate", "No effect", "Stops reaction"],
                correct: 1,
                difficulty: "medium",
                explanation: "Larger surface area provides more contact points for reaction, increasing the rate."
            },
            {
                question: "What is a catalyst?",
                options: ["Substance used up in reaction", "Substance that slows reaction", "Substance that speeds up reaction without being used up", "Product of reaction"],
                correct: 2,
                difficulty: "easy",
                explanation: "A catalyst speeds up reactions without being consumed in the process."
            },
            {
                question: "What must happen for particles to react?",
                options: ["They must be hot", "They must collide", "They must be large", "They must be metals"],
                correct: 1,
                difficulty: "easy",
                explanation: "Particles must collide for chemical reactions to occur."
            },
            {
                question: "What happens to particles when temperature increases?",
                options: ["Move slower", "Move faster", "Stop moving", "Get smaller"],
                correct: 1,
                difficulty: "easy",
                explanation: "Higher temperature gives particles more kinetic energy, making them move faster."
            },
            {
                question: "Why does powdered marble react faster than marble chips with acid?",
                options: ["Powder is purer", "Powder has larger surface area", "Powder is hotter", "Powder dissolves better"],
                correct: 1,
                difficulty: "easy",
                explanation: "Powdered marble has much larger surface area, allowing more contact with acid."
            },
            {
                question: "What happens to reaction rate as reactants are used up?",
                options: ["Increases", "Decreases", "Stays constant", "Becomes zero immediately"],
                correct: 1,
                difficulty: "easy",
                explanation: "As reactants are consumed, their concentration decreases, slowing the reaction."
            },
            {
                question: "How can you measure the rate of a reaction that produces gas?",
                options: ["Measure temperature change", "Measure volume of gas produced", "Measure color change", "Measure pH change"],
                correct: 1,
                difficulty: "easy",
                explanation: "Gas production can be measured by collecting and measuring the volume of gas produced over time."
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "What factors affect the rate of reaction?",
                options: ["Temperature only", "Concentration only", "Temperature, concentration, surface area, catalyst", "Pressure only"],
                correct: 2,
                difficulty: "medium",
                explanation: "Reaction rate is affected by temperature, concentration, surface area, and presence of catalysts."
            },
            {
                question: "What is collision theory?",
                options: ["Theory about car crashes", "Particles must collide with sufficient energy to react", "Theory about planets", "Theory about electrons"],
                correct: 1,
                difficulty: "hard",
                explanation: "Collision theory states that particles must collide with sufficient energy and correct orientation to react."
            },
            {
                question: "What is activation energy?",
                options: ["Energy released in reaction", "Minimum energy needed for reaction to occur", "Energy of products", "Energy of reactants"],
                correct: 1,
                difficulty: "medium",
                explanation: "Activation energy is the minimum energy particles need to react when they collide."
            },
            {
                question: "How do catalysts work?",
                options: ["Increase temperature", "Provide alternative route with lower activation energy", "Increase pressure", "Add more reactants"],
                correct: 1,
                difficulty: "medium",
                explanation: "Catalysts provide an alternative reaction pathway with lower activation energy."
            },
            {
                question: "Why don't all collisions result in reaction?",
                options: ["Particles are too small", "Not all collisions have sufficient energy", "Particles repel", "Temperature too low"],
                correct: 1,
                difficulty: "medium",
                explanation: "Only collisions with energy greater than the activation energy result in reaction."
            },
            {
                question: "What is meant by successful collision?",
                options: ["Any collision", "Collision with sufficient energy and correct orientation", "Fast collision", "Slow collision"],
                correct: 1,
                difficulty: "medium",
                explanation: "Successful collisions have both sufficient energy and correct orientation to break bonds."
            },
            {
                question: "How does pressure affect the rate of gas reactions?",
                options: ["Higher pressure increases rate", "Higher pressure decreases rate", "No effect", "Stops reaction"],
                correct: 0,
                difficulty: "medium",
                explanation: "Higher pressure compresses gas particles closer together, increasing collision frequency."
            },
            {
                question: "What happens to activation energy when a catalyst is used?",
                options: ["Increases", "Decreases", "Stays same", "Becomes zero"],
                correct: 1,
                difficulty: "medium",
                explanation: "Catalysts lower the activation energy, making reactions faster."
            },
            {
                question: "Why does food cook faster at higher temperatures?",
                options: ["Food is softer", "Chemical reactions occur faster", "Water boils", "Food changes color"],
                correct: 1,
                difficulty: "medium",
                explanation: "Cooking involves chemical reactions that occur faster at higher temperatures."
            },
            {
                question: "What is an enzyme?",
                options: ["Chemical reactant", "Biological catalyst", "Product of reaction", "Type of protein only"],
                correct: 1,
                difficulty: "medium",
                explanation: "Enzymes are biological catalysts that speed up reactions in living organisms."
            },
            {
                question: "Why do enzymes have optimum temperatures?",
                options: ["They get tired", "They denature at high temperatures", "They freeze at low temperatures", "They change color"],
                correct: 1,
                difficulty: "medium",
                explanation: "Enzymes denature (lose their shape and function) if temperature is too high."
            },
            
            // HARD QUESTIONS (4)
            {
                question: "Draw a reaction profile for an exothermic reaction and explain the effect of a catalyst:",
                options: ["Catalyst increases activation energy", "Catalyst lowers activation energy but doesn't change overall energy change", "Catalyst changes products", "Catalyst stops reaction"],
                correct: 1,
                difficulty: "hard",
                explanation: "Catalysts lower activation energy but don't change the overall energy change of the reaction."
            },
            {
                question: "How would doubling the concentration affect the rate if the reaction is first order?",
                options: ["Rate doubles", "Rate halves", "Rate quadruples", "No change"],
                correct: 0,
                difficulty: "hard",
                explanation: "For a first-order reaction, doubling concentration doubles the rate."
            },
            {
                question: "Why do catalysts remain unchanged at the end of reactions?",
                options: ["They're very stable", "They're regenerated during the reaction", "They don't participate", "They're metals"],
                correct: 1,
                difficulty: "hard",
                explanation: "Catalysts are regenerated during the reaction cycle, so they're not consumed overall."
            },
            {
                question: "What is the relationship between temperature and rate constant k?",
                options: ["k decreases with temperature", "k increases exponentially with temperature", "No relationship", "k is constant"],
                correct: 1,
                difficulty: "hard",
                explanation: "The rate constant k increases exponentially with temperature (Arrhenius equation)."
            }
        ],
        
        electrolysis: [
            // EASY QUESTIONS (10)
            {
                question: "What is electrolysis?",
                options: ["Using electricity to cause chemical reactions", "Using heat to break compounds", "Mixing chemicals", "Burning substances"],
                correct: 0,
                difficulty: "medium",
                explanation: "Electrolysis uses electrical energy to break down ionic compounds into their elements."
            },
            {
                question: "What are electrodes?",
                options: ["Types of ions", "Conducting rods that carry current", "Chemical products", "Electrical circuits"],
                correct: 1,
                difficulty: "easy",
                explanation: "Electrodes are conducting rods (usually metal or carbon) that carry electric current."
            },
            {
                question: "What is an electrolyte?",
                options: ["Metal electrode", "Substance that conducts electricity when molten or dissolved", "Chemical product", "Type of current"],
                correct: 1,
                difficulty: "easy",
                explanation: "An electrolyte is a substance that conducts electricity when molten or in solution."
            },
            {
                question: "What is the cathode?",
                options: ["Positive electrode", "Negative electrode", "Chemical product", "Type of ion"],
                correct: 1,
                difficulty: "easy",
                explanation: "The cathode is the negative electrode in electrolysis."
            },
            {
                question: "What is the anode?",
                options: ["Negative electrode", "Positive electrode", "Chemical product", "Type of ion"],
                correct: 1,
                difficulty: "easy",
                explanation: "The anode is the positive electrode in electrolysis."
            },
            {
                question: "Which ions move to the cathode?",
                options: ["Negative ions", "Positive ions", "All ions", "No ions"],
                correct: 1,
                difficulty: "easy",
                explanation: "Positive ions (cations) are attracted to the negative cathode."
            },
            {
                question: "Which ions move to the anode?",
                options: ["Positive ions", "Negative ions", "All ions", "No ions"],
                correct: 1,
                difficulty: "easy",
                explanation: "Negative ions (anions) are attracted to the positive anode."
            },
            {
                question: "What type of compounds can be electrolyzed?",
                options: ["Only acids", "Only metals", "Ionic compounds", "Only gases"],
                correct: 2,
                difficulty: "medium",
                explanation: "Ionic compounds can be electrolyzed because they contain mobile ions that can carry electric current."
            },
            {
                question: "Why must ionic compounds be molten or in solution for electrolysis?",
                options: ["To make them pure", "So ions can move freely", "To heat them up", "To dissolve electrodes"],
                correct: 1,
                difficulty: "easy",
                explanation: "Ions must be free to move to carry electric current and reach the electrodes."
            },
            {
                question: "What is produced when copper chloride is electrolyzed?",
                options: ["Copper at cathode, chlorine at anode", "Chlorine at cathode, copper at anode", "Only copper", "Only chlorine"],
                correct: 0,
                difficulty: "easy",
                explanation: "Cu²⁺ ions go to cathode (forming copper), Cl⁻ ions go to anode (forming chlorine gas)."
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "What happens at the cathode during electrolysis?",
                options: ["Oxidation", "Reduction", "No reaction", "Explosion"],
                correct: 1,
                difficulty: "hard",
                explanation: "At the cathode (negative electrode), reduction occurs - positive ions gain electrons."
            },
            {
                question: "What happens at the anode during electrolysis?",
                options: ["Reduction", "Oxidation", "No reaction", "Explosion"],
                correct: 1,
                difficulty: "hard",
                explanation: "At the anode (positive electrode), oxidation occurs - negative ions lose electrons."
            },
            {
                question: "What is produced when water is electrolyzed?",
                options: ["Oxygen and carbon dioxide", "Hydrogen and oxygen", "Just hydrogen", "Just oxygen"],
                correct: 1,
                difficulty: "medium",
                explanation: "Electrolysis of water produces hydrogen gas at the cathode and oxygen gas at the anode."
            },
            {
                question: "What is the ratio of hydrogen to oxygen produced in water electrolysis?",
                options: ["1:1", "2:1", "1:2", "3:1"],
                correct: 1,
                difficulty: "medium",
                explanation: "Water (H₂O) produces 2 volumes of hydrogen for every 1 volume of oxygen."
            },
            {
                question: "Why is electrolysis of aluminum oxide carried out at high temperature?",
                options: ["To melt the aluminum oxide", "To speed up reaction", "To save energy", "To prevent contamination"],
                correct: 0,
                difficulty: "medium",
                explanation: "Aluminum oxide must be molten for the ions to move freely and conduct electricity."
            },
            {
                question: "What is electroplating?",
                options: ["Breaking down metals", "Coating objects with thin layer of metal using electrolysis", "Melting metals", "Mixing metals"],
                correct: 1,
                difficulty: "medium",
                explanation: "Electroplating uses electrolysis to coat objects with a thin layer of metal."
            },
            {
                question: "In electroplating with silver, what should the anode be made of?",
                options: ["Carbon", "Copper", "Silver", "Platinum"],
                correct: 2,
                difficulty: "medium",
                explanation: "The anode should be made of the metal being plated (silver) so it dissolves to replace the ions used."
            },
            {
                question: "What happens to the mass of the cathode during copper electroplating?",
                options: ["Increases", "Decreases", "Stays same", "Varies randomly"],
                correct: 0,
                difficulty: "medium",
                explanation: "Copper ions from solution are deposited on the cathode, increasing its mass."
            },
            {
                question: "What happens to the mass of a copper anode during copper electroplating?",
                options: ["Increases", "Decreases", "Stays same", "Varies randomly"],
                correct: 1,
                difficulty: "medium",
                explanation: "The copper anode dissolves to form Cu²⁺ ions, decreasing its mass."
            },
            {
                question: "Why is cryolite added to aluminum oxide during aluminum extraction?",
                options: ["To increase purity", "To lower melting point", "To add color", "To prevent oxidation"],
                correct: 1,
                difficulty: "medium",
                explanation: "Cryolite lowers the melting point of aluminum oxide, saving energy."
            },
            {
                question: "What is the main industrial use of electrolysis?",
                options: ["Making electricity", "Extracting reactive metals", "Producing heat", "Making compounds"],
                correct: 1,
                difficulty: "medium",
                explanation: "Electrolysis is used to extract very reactive metals like aluminum from their ores."
            },
            
            // HARD QUESTIONS (4)
            {
                question: "Write the half-equation for the reaction at the cathode when molten lead bromide is electrolyzed:",
                options: ["Pb²⁺ + 2e⁻ → Pb", "Pb → Pb²⁺ + 2e⁻", "Br⁻ → Br + e⁻", "2Br⁻ → Br₂ + 2e⁻"],
                correct: 0,
                difficulty: "hard",
                explanation: "At the cathode, Pb²⁺ ions gain electrons: Pb²⁺ + 2e⁻ → Pb"
            },
            {
                question: "Write the half-equation for the reaction at the anode when molten lead bromide is electrolyzed:",
                options: ["Pb²⁺ + 2e⁻ → Pb", "Pb → Pb²⁺ + 2e⁻", "Br⁻ → Br + e⁻", "2Br⁻ → Br₂ + 2e⁻"],
                correct: 3,
                difficulty: "hard",
                explanation: "At the anode, Br⁻ ions lose electrons: 2Br⁻ → Br₂ + 2e⁻"
            },
            {
                question: "Why do ionic solids not conduct electricity?",
                options: ["No electrons", "Ions cannot move", "No ions present", "Wrong voltage"],
                correct: 1,
                difficulty: "hard",
                explanation: "In solid ionic compounds, ions are held in fixed positions and cannot move to carry current."
            },
            {
                question: "What determines which ion is discharged when multiple ions are present?",
                options: ["Size of ion", "Charge on ion", "Position in reactivity series", "All of the above"],
                correct: 2,
                difficulty: "hard",
                explanation: "The position in the reactivity series determines which ions are preferentially discharged."
            }
        ],
        
        quantitativeChemistry: [
            // EASY QUESTIONS (10)
            {
                question: "What is a mole?",
                options: ["6.02 × 10²³ particles", "Amount of substance", "Both A and B", "Type of animal"],
                correct: 2,
                difficulty: "medium",
                explanation: "A mole is both an amount of substance and equals 6.02 × 10²³ particles (Avogadro's number)."
            },
            {
                question: "What is the mass of one mole of carbon-12?",
                options: ["6 g", "12 g", "18 g", "24 g"],
                correct: 1,
                difficulty: "easy",
                explanation: "One mole of carbon-12 has a mass of exactly 12 grams by definition."
            },
            {
                question: "What is Avogadro's number?",
                options: ["6.02 × 10²³", "6.02 × 10²²", "3.01 × 10²³", "12.04 × 10²³"],
                correct: 0,
                difficulty: "easy",
                explanation: "Avogadro's number is 6.02 × 10²³ particles per mole."
            },
            {
                question: "What is the relative atomic mass of an element?",
                options: ["Mass of one atom", "Mass of one mole of atoms", "Number of protons", "Number of neutrons"],
                correct: 1,
                difficulty: "easy",
                explanation: "Relative atomic mass is the mass of one mole of atoms of an element."
            },
            {
                question: "What is the unit of relative molecular mass?",
                options: ["Grams", "Kilograms", "No units", "Moles"],
                correct: 2,
                difficulty: "easy",
                explanation: "Relative molecular mass is a ratio and has no units."
            },
            {
                question: "How do you calculate the number of moles?",
                options: ["mass × Mr", "mass ÷ Mr", "Mr ÷ mass", "mass + Mr"],
                correct: 1,
                difficulty: "medium",
                explanation: "Number of moles = mass (g) ÷ relative molecular mass (Mr)"
            },
            {
                question: "What is the relative molecular mass of water (H₂O)?",
                options: ["16", "18", "20", "22"],
                correct: 1,
                difficulty: "medium",
                explanation: "H₂O: (2 × 1) + (1 × 16) = 2 + 16 = 18"
            },
            {
                question: "What is conservation of mass?",
                options: ["Mass increases in reactions", "Mass decreases in reactions", "Mass stays the same in reactions", "Mass disappears"],
                correct: 2,
                difficulty: "medium",
                explanation: "In chemical reactions, the total mass of reactants equals the total mass of products."
            },
            {
                question: "What is the relative atomic mass of oxygen?",
                options: ["8", "16", "32", "24"],
                correct: 1,
                difficulty: "easy",
                explanation: "Oxygen has a relative atomic mass of 16."
            },
            {
                question: "What is the relative atomic mass of carbon?",
                options: ["6", "12", "18", "14"],
                correct: 1,
                difficulty: "easy",
                explanation: "Carbon has a relative atomic mass of 12."
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "What is the relative molecular mass of carbon dioxide (CO₂)?",
                options: ["28", "44", "32", "48"],
                correct: 1,
                difficulty: "medium",
                explanation: "CO₂: 12 + (2 × 16) = 12 + 32 = 44"
            },
            {
                question: "What is the relative molecular mass of methane (CH₄)?",
                options: ["12", "16", "20", "8"],
                correct: 1,
                difficulty: "medium",
                explanation: "CH₄: 12 + (4 × 1) = 12 + 4 = 16"
            },
            {
                question: "How many moles are in 36g of water (H₂O)?",
                options: ["1 mol", "2 mol", "3 mol", "18 mol"],
                correct: 1,
                difficulty: "medium",
                explanation: "Moles = mass ÷ Mr = 36g ÷ 18 = 2 mol"
            },
            {
                question: "What is the mass of 0.5 moles of CO₂?",
                options: ["22 g", "44 g", "11 g", "88 g"],
                correct: 0,
                difficulty: "medium",
                explanation: "Mass = moles × Mr = 0.5 × 44 = 22 g"
            },
            {
                question: "What is percentage by mass?",
                options: ["Mass of element ÷ total mass × 100%", "Total mass ÷ mass of element × 100%", "Mass of element × 100", "Moles × 100"],
                correct: 0,
                difficulty: "medium",
                explanation: "Percentage by mass = (mass of element ÷ total mass) × 100%"
            },
            {
                question: "What is empirical formula?",
                options: ["Actual molecular formula", "Simplest whole number ratio of atoms", "Formula with charges", "Structural formula"],
                correct: 1,
                difficulty: "medium",
                explanation: "Empirical formula shows the simplest whole number ratio of atoms in a compound."
            },
            {
                question: "What is molecular formula?",
                options: ["Simplest ratio of atoms", "Actual number of atoms in molecule", "Formula with charges", "Structural arrangement"],
                correct: 1,
                difficulty: "medium",
                explanation: "Molecular formula shows the actual number of atoms of each element in a molecule."
            },
            {
                question: "What is concentration?",
                options: ["Amount of solute per unit volume of solution", "Total amount of solution", "Amount of solvent", "Temperature of solution"],
                correct: 0,
                difficulty: "medium",
                explanation: "Concentration is the amount of solute dissolved per unit volume of solution."
            },
            {
                question: "What is the unit of concentration?",
                options: ["g/L", "mol/dm³", "Both A and B", "kg/m³"],
                correct: 2,
                difficulty: "medium",
                explanation: "Concentration can be expressed in g/L, mol/dm³, or other units."
            },
            {
                question: "How do you calculate concentration in mol/dm³?",
                options: ["moles ÷ volume", "volume ÷ moles", "moles × volume", "mass ÷ volume"],
                correct: 0,
                difficulty: "medium",
                explanation: "Concentration (mol/dm³) = number of moles ÷ volume in dm³"
            },
            {
                question: "What is a limiting reactant?",
                options: ["Reactant in excess", "Reactant that determines amount of product", "Slowest reactant", "Most expensive reactant"],
                correct: 1,
                difficulty: "medium",
                explanation: "The limiting reactant is completely used up and determines how much product can be formed."
            },
            
            // HARD QUESTIONS (4)
            {
                question: "Calculate the number of molecules in 2 moles of CO₂:",
                options: ["6.02 × 10²³", "1.204 × 10²⁴", "3.01 × 10²³", "2.41 × 10²⁴"],
                correct: 1,
                difficulty: "hard",
                explanation: "Number of molecules = moles × Avogadro's number = 2 × 6.02 × 10²³ = 1.204 × 10²⁴"
            },
            {
                question: "What is the percentage by mass of carbon in CO₂?",
                options: ["27.3%", "72.7%", "50%", "25%"],
                correct: 0,
                difficulty: "hard",
                explanation: "% carbon = (12 ÷ 44) × 100% = 27.3%"
            },
            {
                question: "How many moles of oxygen are needed to react with 2 moles of methane in combustion?",
                options: ["2 mol", "4 mol", "6 mol", "8 mol"],
                correct: 1,
                difficulty: "hard",
                explanation: "CH₄ + 2O₂ → CO₂ + 2H₂O. Ratio is 1:2, so 2 mol CH₄ needs 4 mol O₂"
            },
            {
                question: "What is the concentration of a solution containing 2 moles of NaCl in 500 cm³?",
                options: ["1 mol/dm³", "2 mol/dm³", "4 mol/dm³", "0.5 mol/dm³"],
                correct: 2,
                difficulty: "hard",
                explanation: "Concentration = 2 mol ÷ 0.5 dm³ = 4 mol/dm³"
            }
        ]
    },
    
    biology: {
        cellBiology: [
            // EASY QUESTIONS (10)
            {
                question: "What is the basic unit of life?",
                options: ["Tissue", "Organ", "Cell", "Organism"],
                correct: 2,
                difficulty: "easy",
                explanation: "The cell is the basic unit of life - all living things are made of cells."
            },
            {
                question: "What controls what enters and leaves a cell?",
                options: ["Nucleus", "Cell membrane", "Cytoplasm", "Mitochondria"],
                correct: 1,
                difficulty: "easy",
                explanation: "The cell membrane controls what substances can enter and leave the cell."
            },
            {
                question: "Where is genetic material stored in a cell?",
                options: ["Cytoplasm", "Cell membrane", "Nucleus", "Mitochondria"],
                correct: 2,
                difficulty: "easy",
                explanation: "The nucleus contains the cell's genetic material (DNA)."
            },
            {
                question: "What is the function of mitochondria?",
                options: ["Protein synthesis", "Energy production", "Waste removal", "Cell division"],
                correct: 1,
                difficulty: "medium",
                explanation: "Mitochondria are the 'powerhouses' of the cell, producing energy through respiration."
            },
            {
                question: "What is unique to plant cells?",
                options: ["Nucleus", "Cell membrane", "Cell wall and chloroplasts", "Mitochondria"],
                correct: 2,
                difficulty: "medium",
                explanation: "Plant cells have cell walls for support and chloroplasts for photosynthesis."
            },
            {
                question: "What is the function of chloroplasts?",
                options: ["Energy production", "Photosynthesis", "Protein synthesis", "Waste storage"],
                correct: 1,
                difficulty: "easy",
                explanation: "Chloroplasts carry out photosynthesis, making glucose from carbon dioxide and water."
            },
            {
                question: "What is cytoplasm?",
                options: ["Cell wall", "Jelly-like substance inside cell", "Genetic material", "Cell membrane"],
                correct: 1,
                difficulty: "easy",
                explanation: "Cytoplasm is the jelly-like substance that fills the cell and contains organelles."
            },
            {
                question: "What is the function of the cell wall?",
                options: ["Controls entry of substances", "Provides support and shape", "Makes proteins", "Stores genetic material"],
                correct: 1,
                difficulty: "easy",
                explanation: "The cell wall provides structural support and maintains cell shape in plants."
            },
            {
                question: "What are ribosomes?",
                options: ["Organelles that make proteins", "Energy producers", "Genetic material", "Cell boundaries"],
                correct: 0,
                difficulty: "easy",
                explanation: "Ribosomes are small organelles that synthesize proteins."
            },
            {
                question: "What is the difference between plant and animal cells?",
                options: ["No difference", "Plants have cell walls and chloroplasts", "Animals have nucleus", "Plants don't have mitochondria"],
                correct: 1,
                difficulty: "easy",
                explanation: "Plant cells have cell walls, chloroplasts, and usually large vacuoles that animal cells lack."
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "What is diffusion?",
                options: ["Movement of water only", "Movement of particles from high to low concentration", "Movement requiring energy", "Movement of large molecules only"],
                correct: 1,
                difficulty: "medium",
                explanation: "Diffusion is the net movement of particles from an area of high concentration to low concentration."
            },
            {
                question: "What is osmosis?",
                options: ["Movement of any substance", "Movement of water through a partially permeable membrane", "Movement requiring energy", "Movement of solutes only"],
                correct: 1,
                difficulty: "medium",
                explanation: "Osmosis is the movement of water across a partially permeable membrane from high to low water concentration."
            },
            {
                question: "What is active transport?",
                options: ["Movement down concentration gradient", "Movement requiring energy against concentration gradient", "Movement of water only", "Passive movement"],
                correct: 1,
                difficulty: "medium",
                explanation: "Active transport moves substances against concentration gradients using energy from respiration."
            },
            {
                question: "What happens to a plant cell in pure water?",
                options: ["Shrinks", "Becomes turgid", "Dies", "Nothing"],
                correct: 1,
                difficulty: "medium",
                explanation: "Water enters by osmosis making the cell turgid (swollen and firm)."
            },
            {
                question: "What happens to an animal cell in pure water?",
                options: ["Becomes turgid", "May burst", "Shrinks", "Nothing"],
                correct: 1,
                difficulty: "medium",
                explanation: "Water enters by osmosis and animal cells may burst as they lack cell walls."
            },
            {
                question: "What is cell specialization?",
                options: ["All cells being identical", "Cells developing specific structures for specific functions", "Cell division", "Cell death"],
                correct: 1,
                difficulty: "medium",
                explanation: "Cell specialization is when cells develop specific structures to carry out particular functions."
            },
            {
                question: "What is the function of a root hair cell?",
                options: ["Photosynthesis", "Absorbing water and minerals", "Transport", "Support"],
                correct: 1,
                difficulty: "medium",
                explanation: "Root hair cells have large surface area to absorb water and minerals efficiently."
            },
            {
                question: "What is the function of red blood cells?",
                options: ["Fighting disease", "Carrying oxygen", "Making proteins", "Removing waste"],
                correct: 1,
                difficulty: "medium",
                explanation: "Red blood cells contain hemoglobin to carry oxygen around the body."
            },
            {
                question: "Why don't red blood cells have a nucleus?",
                options: ["To save space", "To carry more hemoglobin", "They don't need DNA", "To move faster"],
                correct: 1,
                difficulty: "medium",
                explanation: "Lack of nucleus allows more space for hemoglobin to carry oxygen."
            },
            {
                question: "What is the function of white blood cells?",
                options: ["Carrying oxygen", "Fighting infections", "Making hormones", "Digesting food"],
                correct: 1,
                difficulty: "medium",
                explanation: "White blood cells defend the body against pathogens and foreign substances."
            },
            {
                question: "What is the function of nerve cells?",
                options: ["Making proteins", "Carrying electrical impulses", "Absorbing nutrients", "Supporting other cells"],
                correct: 1,
                difficulty: "medium",
                explanation: "Nerve cells are specialized to carry electrical impulses rapidly around the body."
            },
            
            // HARD QUESTIONS (4)
            {
                question: "Calculate the magnification if an object is 0.1mm and appears 10mm in the image:",
                options: ["×10", "×100", "×1000", "×0.1"],
                correct: 1,
                difficulty: "hard",
                explanation: "Magnification = image size ÷ actual size = 10mm ÷ 0.1mm = ×100"
            },
            {
                question: "What limits the resolution of a light microscope?",
                options: ["Magnification power", "Wavelength of light", "Size of lenses", "Electric supply"],
                correct: 1,
                difficulty: "hard",
                explanation: "Resolution is limited by the wavelength of light used - shorter wavelengths give better resolution."
            },
            {
                question: "Why do electron microscopes have better resolution than light microscopes?",
                options: ["Higher magnification", "Electrons have shorter wavelength than light", "Better lenses", "More expensive"],
                correct: 1,
                difficulty: "hard",
                explanation: "Electrons have much shorter wavelengths than light, allowing much better resolution."
            },
            {
                question: "What is the difference between TEM and SEM?",
                options: ["No difference", "TEM shows internal structure, SEM shows surface structure", "SEM is newer", "TEM uses light"],
                correct: 1,
                difficulty: "hard",
                explanation: "TEM (Transmission Electron Microscopy) shows internal structure; SEM (Scanning Electron Microscopy) shows surface details."
            }
        ],
        
        organisation: [
            // EASY QUESTIONS (10)
            {
                question: "What is the hierarchy of biological organization?",
                options: ["Cell → Tissue → Organ → Organ system", "Organ → Cell → Tissue → System", "Tissue → Cell → Organ → System", "Cell → Organ → Tissue → System"],
                correct: 0,
                difficulty: "medium",
                explanation: "The correct order is: Cell → Tissue → Organ → Organ system → Organism"
            },
            {
                question: "What is a tissue?",
                options: ["Single cell", "Group of similar cells", "Collection of organs", "Whole organism"],
                correct: 1,
                difficulty: "easy",
                explanation: "A tissue is a group of similar cells working together to perform a specific function."
            },
            {
                question: "What is an organ?",
                options: ["Single cell", "Group of cells", "Group of tissues working together", "Group of organisms"],
                correct: 2,
                difficulty: "easy",
                explanation: "An organ is made of different tissues working together to perform a specific function."
            },
            {
                question: "What is an organ system?",
                options: ["Single organ", "Group of organs working together", "Group of cells", "Single tissue"],
                correct: 1,
                difficulty: "easy",
                explanation: "An organ system is a group of organs working together to perform major life processes."
            },
            {
                question: "What is the function of the digestive system?",
                options: ["Pumping blood", "Breaking down food", "Exchanging gases", "Filtering waste"],
                correct: 1,
                difficulty: "easy",
                explanation: "The digestive system breaks down food to provide nutrients for the body."
            },
            {
                question: "What is the function of the circulatory system?",
                options: ["Breaking down food", "Transporting substances around body", "Exchanging gases", "Controlling body functions"],
                correct: 1,
                difficulty: "easy",
                explanation: "The circulatory system transports blood, nutrients, oxygen, and waste around the body."
            },
            {
                question: "What is the function of the respiratory system?",
                options: ["Pumping blood", "Breaking down food", "Gas exchange", "Making hormones"],
                correct: 2,
                difficulty: "easy",
                explanation: "The respiratory system is responsible for gas exchange - getting oxygen in and carbon dioxide out."
            },
            {
                question: "What is the function of the nervous system?",
                options: ["Pumping blood", "Coordinating body activities", "Making hormones", "Fighting disease"],
                correct: 1,
                difficulty: "easy",
                explanation: "The nervous system coordinates and controls body activities through electrical impulses."
            },
            {
                question: "What is the function of the excretory system?",
                options: ["Making hormones", "Removing waste products", "Fighting infections", "Producing energy"],
                correct: 1,
                difficulty: "easy",
                explanation: "The excretory system removes waste products from the body, mainly through the kidneys."
            },
            {
                question: "What type of tissue covers and protects organs?",
                options: ["Muscle tissue", "Nerve tissue", "Epithelial tissue", "Connective tissue"],
                correct: 2,
                difficulty: "easy",
                explanation: "Epithelial tissue forms protective layers covering organs and body surfaces."
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "What type of tissue contracts to produce movement?",
                options: ["Epithelial tissue", "Muscle tissue", "Nerve tissue", "Connective tissue"],
                correct: 1,
                difficulty: "medium",
                explanation: "Muscle tissue contains contractile proteins that allow movement."
            },
            {
                question: "What type of tissue carries electrical impulses?",
                options: ["Muscle tissue", "Epithelial tissue", "Nerve tissue", "Connective tissue"],
                correct: 2,
                difficulty: "medium",
                explanation: "Nerve tissue is specialized to carry electrical impulses rapidly."
            },
            {
                question: "What type of tissue provides support and connects other tissues?",
                options: ["Epithelial tissue", "Muscle tissue", "Nerve tissue", "Connective tissue"],
                correct: 3,
                difficulty: "medium",
                explanation: "Connective tissue includes bone, cartilage, and blood - it supports and connects."
            },
            {
                question: "What are the main organs of the digestive system?",
                options: ["Heart and lungs", "Mouth, stomach, intestines", "Brain and spinal cord", "Kidneys and bladder"],
                correct: 1,
                difficulty: "medium",
                explanation: "The digestive system includes mouth, esophagus, stomach, small and large intestines."
            },
            {
                question: "What are the main organs of the respiratory system?",
                options: ["Heart and blood vessels", "Stomach and intestines", "Lungs and airways", "Kidneys and bladder"],
                correct: 2,
                difficulty: "medium",
                explanation: "The respiratory system includes lungs, trachea, bronchi, and bronchioles."
            },
            {
                question: "What are the main organs of the circulatory system?",
                options: ["Heart and blood vessels", "Lungs and airways", "Brain and nerves", "Stomach and intestines"],
                correct: 0,
                difficulty: "medium",
                explanation: "The circulatory system includes the heart, arteries, veins, and capillaries."
            },
            {
                question: "What connects muscle to bone?",
                options: ["Ligaments", "Tendons", "Cartilage", "Nerves"],
                correct: 1,
                difficulty: "medium",
                explanation: "Tendons are strong connective tissue that attach muscles to bones."
            },
            {
                question: "What connects bone to bone?",
                options: ["Tendons", "Ligaments", "Cartilage", "Muscles"],
                correct: 1,
                difficulty: "medium",
                explanation: "Ligaments are connective tissue that hold bones together at joints."
            },
            {
                question: "What is the function of cartilage?",
                options: ["Muscle contraction", "Cushioning joints", "Carrying impulses", "Filtering blood"],
                correct: 1,
                difficulty: "medium",
                explanation: "Cartilage provides smooth surfaces and cushioning at joints."
            },
            {
                question: "How do organ systems work together?",
                options: ["They work independently", "They coordinate to maintain life", "Only some work together", "They compete with each other"],
                correct: 1,
                difficulty: "medium",
                explanation: "All organ systems work together in coordination to maintain life and health."
            },
            {
                question: "What is the relationship between structure and function?",
                options: ["No relationship", "Structure determines function", "Function determines structure", "Both B and C"],
                correct: 3,
                difficulty: "medium",
                explanation: "Structure and function are closely related - structure enables function, and function shapes structure through evolution."
            },
            
            // HARD QUESTIONS (4)
            {
                question: "How does the digestive system work with the circulatory system?",
                options: ["They don't interact", "Circulatory system transports absorbed nutrients", "Digestive system pumps blood", "They work against each other"],
                correct: 1,
                difficulty: "hard",
                explanation: "The circulatory system transports nutrients absorbed by the digestive system to all body cells."
            },
            {
                question: "How does the respiratory system work with the circulatory system?",
                options: ["Respiratory system pumps blood", "Circulatory system transports gases to/from lungs", "They work independently", "Respiratory system makes blood"],
                correct: 1,
                difficulty: "hard",
                explanation: "The circulatory system transports oxygen from lungs to tissues and carbon dioxide from tissues to lungs."
            },
            {
                question: "What is the role of the nervous system in coordination?",
                options: ["Only controls muscles", "Coordinates all organ systems", "Only processes thoughts", "Only controls breathing"],
                correct: 1,
                difficulty: "hard",
                explanation: "The nervous system coordinates and controls all organ systems to maintain homeostasis."
            },
            {
                question: "How does specialization increase efficiency?",
                options: ["It doesn't", "Each part can focus on specific function", "It slows things down", "Only in some cases"],
                correct: 1,
                difficulty: "hard",
                explanation: "Specialization allows each part to be optimized for its specific function, increasing overall efficiency."
            }
        ],
        
        bioenergetics: [
            // EASY QUESTIONS (10)
            {
                question: "What is photosynthesis?",
                options: ["Breaking down glucose", "Making glucose from CO2 and water", "Breathing process", "Digesting food"],
                correct: 1,
                difficulty: "easy",
                explanation: "Photosynthesis is the process where plants make glucose from carbon dioxide and water using light energy."
            },
            {
                question: "Where does photosynthesis occur?",
                options: ["Mitochondria", "Nucleus", "Chloroplasts", "Cell membrane"],
                correct: 2,
                difficulty: "easy",
                explanation: "Photosynthesis occurs in chloroplasts, which contain chlorophyll to capture light."
            },
            {
                question: "What is respiration?",
                options: ["Breathing", "Breaking down glucose to release energy", "Making glucose", "Photosynthesis"],
                correct: 1,
                difficulty: "medium",
                explanation: "Respiration is the process of breaking down glucose to release energy for cellular processes."
            },
            {
                question: "What are the products of aerobic respiration?",
                options: ["Glucose and oxygen", "Carbon dioxide and water", "Lactic acid", "Alcohol"],
                correct: 1,
                difficulty: "medium",
                explanation: "Aerobic respiration produces carbon dioxide, water, and ATP (energy)."
            },
            {
                question: "What is needed for photosynthesis?",
                options: ["Carbon dioxide and water", "Oxygen and glucose", "Carbon dioxide and oxygen", "Water and oxygen"],
                correct: 0,
                difficulty: "easy",
                explanation: "Photosynthesis requires carbon dioxide, water, and light energy."
            },
            {
                question: "What are the products of photosynthesis?",
                options: ["Carbon dioxide and water", "Glucose and oxygen", "Carbon dioxide and oxygen", "Glucose and water"],
                correct: 1,
                difficulty: "easy",
                explanation: "Photosynthesis produces glucose and oxygen."
            },
            {
                question: "What is anaerobic respiration?",
                options: ["Respiration with oxygen", "Respiration without oxygen", "Very fast respiration", "Respiration in plants only"],
                correct: 1,
                difficulty: "easy",
                explanation: "Anaerobic respiration occurs without oxygen and produces less energy."
            },
            {
                question: "What is produced during anaerobic respiration in animals?",
                options: ["Alcohol", "Lactic acid", "Carbon dioxide only", "Water only"],
                correct: 1,
                difficulty: "easy",
                explanation: "Anaerobic respiration in animals produces lactic acid and energy."
            },
            {
                question: "What is produced during anaerobic respiration in yeast?",
                options: ["Lactic acid", "Alcohol and carbon dioxide", "Oxygen", "Glucose"],
                correct: 1,
                difficulty: "easy",
                explanation: "Yeast produces alcohol and carbon dioxide during anaerobic respiration (fermentation)."
            },
            {
                question: "Why do plants need both photosynthesis and respiration?",
                options: ["They don't need both", "Photosynthesis makes food, respiration releases energy", "Only for decoration", "To compete with animals"],
                correct: 1,
                difficulty: "easy",
                explanation: "Plants need photosynthesis to make glucose and respiration to release energy from glucose."
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "What is the equation for photosynthesis?",
                options: ["6CO2 + 6H2O → C6H12O6 + 6O2", "C6H12O6 + 6O2 → 6CO2 + 6H2O", "CO2 + H2O → glucose", "glucose → CO2 + H2O"],
                correct: 0,
                difficulty: "medium",
                explanation: "6CO2 + 6H2O + light energy → C6H12O6 + 6O2"
            },
            {
                question: "What is the equation for aerobic respiration?",
                options: ["6CO2 + 6H2O → C6H12O6 + 6O2", "C6H12O6 + 6O2 → 6CO2 + 6H2O + energy", "C6H12O6 → lactic acid + energy", "C6H12O6 → alcohol + CO2"],
                correct: 1,
                difficulty: "medium",
                explanation: "C6H12O6 + 6O2 → 6CO2 + 6H2O + ATP (energy)"
            },
            {
                question: "What factors affect the rate of photosynthesis?",
                options: ["Light intensity only", "Temperature only", "Light intensity, temperature, CO2 concentration", "Water only"],
                correct: 2,
                difficulty: "medium",
                explanation: "Light intensity, temperature, and CO2 concentration all affect photosynthesis rate."
            },
            {
                question: "What is a limiting factor?",
                options: ["Most abundant factor", "Factor that limits the rate when in short supply", "Strongest factor", "Last factor added"],
                correct: 1,
                difficulty: "medium",
                explanation: "A limiting factor is in short supply and prevents the rate from increasing further."
            },
            {
                question: "Why does photosynthesis stop in the dark?",
                options: ["Plants sleep", "No light energy available", "Too cold", "No carbon dioxide"],
                correct: 1,
                difficulty: "medium",
                explanation: "Light energy is essential for photosynthesis - without it, the process cannot occur."
            },
            {
                question: "Where does aerobic respiration occur?",
                options: ["Chloroplasts only", "Mitochondria only", "Nucleus", "All parts of cell"],
                correct: 1,
                difficulty: "medium",
                explanation: "Aerobic respiration occurs mainly in mitochondria."
            },
            {
                question: "When does anaerobic respiration occur?",
                options: ["Always", "When oxygen is limited", "Only in plants", "Only at night"],
                correct: 1,
                difficulty: "medium",
                explanation: "Anaerobic respiration occurs when oxygen is not available or in limited supply."
            },
            {
                question: "Why is anaerobic respiration less efficient?",
                options: ["Uses more glucose", "Produces less ATP per glucose", "Takes longer", "Requires more oxygen"],
                correct: 1,
                difficulty: "medium",
                explanation: "Anaerobic respiration produces much less ATP (energy) per glucose molecule than aerobic respiration."
            },
            {
                question: "What happens to oxygen levels in a pond during the day?",
                options: ["Decreases", "Increases", "Stays same", "Disappears completely"],
                correct: 1,
                difficulty: "medium",
                explanation: "Oxygen levels increase during the day due to photosynthesis by aquatic plants."
            },
            {
                question: "What happens to oxygen levels in a pond at night?",
                options: ["Increases", "Decreases", "Stays same", "Doubles"],
                correct: 1,
                difficulty: "medium",
                explanation: "Oxygen levels decrease at night as respiration continues but photosynthesis stops."
            },
            {
                question: "What is the purpose of ATP?",
                options: ["Energy storage molecule", "Immediate energy currency", "Building material", "Waste product"],
                correct: 1,
                difficulty: "medium",
                explanation: "ATP is the immediate energy currency that cells use for energy-requiring processes."
            },
            
            // HARD QUESTIONS (4)
            {
                question: "Why do plants carry out respiration as well as photosynthesis?",
                options: ["They don't need both", "Respiration occurs when photosynthesis can't", "Both occur simultaneously", "For temperature control"],
                correct: 2,
                difficulty: "hard",
                explanation: "Both processes occur simultaneously - photosynthesis in light, respiration continuously for energy."
            },
            {
                question: "How are photosynthesis and respiration related?",
                options: ["Unrelated processes", "Opposite processes that complement each other", "Same process", "Competing processes"],
                correct: 1,
                difficulty: "hard",
                explanation: "They are complementary - photosynthesis stores energy in glucose, respiration releases it."
            },
            {
                question: "What happens during exercise when oxygen supply becomes limited?",
                options: ["Respiration stops", "Switch to anaerobic respiration", "Body temperature rises", "Heart stops"],
                correct: 1,
                difficulty: "hard",
                explanation: "Muscles switch to anaerobic respiration, producing lactic acid and less energy."
            },
            {
                question: "Why do we breathe faster after exercise?",
                options: ["To cool down", "To repay oxygen debt and remove lactic acid", "Because we're tired", "To get more energy"],
                correct: 1,
                difficulty: "hard",
                explanation: "Fast breathing repays oxygen debt and helps remove lactic acid produced during anaerobic respiration."
            }
        ],
        
        homeostasis: [
            // EASY QUESTIONS (10)
            {
                question: "What is homeostasis?",
                options: ["Growth of organisms", "Maintaining stable internal conditions", "Reproduction", "Evolution"],
                correct: 1,
                difficulty: "medium",
                explanation: "Homeostasis is maintaining stable internal conditions despite external changes."
            },
            {
                question: "What is normal human body temperature?",
                options: ["35°C", "37°C", "39°C", "40°C"],
                correct: 1,
                difficulty: "easy",
                explanation: "Normal human body temperature is approximately 37°C."
            },
            {
                question: "What happens when you get too hot?",
                options: ["Shiver", "Sweat", "Hair stands up", "Blood vessels contract"],
                correct: 1,
                difficulty: "easy",
                explanation: "Sweating helps cool the body through evaporation."
            },
            {
                question: "What happens when you get too cold?",
                options: ["Sweat", "Shiver", "Pant", "Sleep"],
                correct: 1,
                difficulty: "easy",
                explanation: "Shivering generates heat through muscle contractions."
            },
            {
                question: "What hormone controls blood sugar levels?",
                options: ["Adrenaline", "Insulin", "Growth hormone", "Testosterone"],
                correct: 1,
                difficulty: "medium",
                explanation: "Insulin controls blood sugar by allowing glucose to enter cells."
            },
            {
                question: "Where is insulin produced?",
                options: ["Liver", "Kidneys", "Pancreas", "Brain"],
                correct: 2,
                difficulty: "easy",
                explanation: "Insulin is produced by the pancreas."
            },
            {
                question: "What happens when blood sugar is too high?",
                options: ["Insulin is released", "Glucagon is released", "Nothing happens", "Adrenaline is released"],
                correct: 0,
                difficulty: "medium",
                explanation: "When blood sugar is high, insulin is released to lower it by moving glucose into cells."
            },
            {
                question: "What are the main organs of excretion?",
                options: ["Heart and lungs", "Kidneys and lungs", "Liver and stomach", "Brain and spinal cord"],
                correct: 1,
                difficulty: "easy",
                explanation: "Kidneys excrete urea and excess water; lungs excrete carbon dioxide."
            },
            {
                question: "What waste product do kidneys remove?",
                options: ["Carbon dioxide", "Urea", "Lactic acid", "Alcohol"],
                correct: 1,
                difficulty: "easy",
                explanation: "Kidneys filter urea (from protein breakdown) out of the blood."
            },
            {
                question: "What waste product do lungs remove?",
                options: ["Urea", "Carbon dioxide", "Water only", "Alcohol"],
                correct: 1,
                difficulty: "easy",
                explanation: "Lungs remove carbon dioxide produced by cellular respiration."
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "How is body temperature regulated?",
                options: ["Only by sweating", "Only by shivering", "Sweating, shivering, and blood vessel dilation/constriction", "Only by blood vessels"],
                correct: 2,
                difficulty: "medium",
                explanation: "Body temperature is regulated by sweating, shivering, and changing blood vessel diameter."
            },
            {
                question: "What happens to blood vessels when you're hot?",
                options: ["Constrict", "Dilate", "No change", "Disappear"],
                correct: 1,
                difficulty: "medium",
                explanation: "Blood vessels near the skin dilate to increase heat loss."
            },
            {
                question: "What happens to blood vessels when you're cold?",
                options: ["Dilate", "Constrict", "No change", "Break"],
                correct: 1,
                difficulty: "medium",
                explanation: "Blood vessels near the skin constrict to reduce heat loss."
            },
            {
                question: "What is negative feedback?",
                options: ["Amplifying changes", "Reducing/counteracting changes", "No response to changes", "Random responses"],
                correct: 1,
                difficulty: "hard",
                explanation: "Negative feedback counteracts changes to maintain homeostasis."
            },
            {
                question: "What happens when blood sugar is too low?",
                options: ["Insulin is released", "Glucagon is released", "Nothing happens", "Person sleeps"],
                correct: 1,
                difficulty: "medium",
                explanation: "When blood sugar is low, glucagon is released to increase it."
            },
            {
                question: "What does glucagon do?",
                options: ["Lowers blood sugar", "Raises blood sugar", "Controls temperature", "Filters blood"],
                correct: 1,
                difficulty: "medium",
                explanation: "Glucagon raises blood sugar by converting glycogen to glucose in the liver."
            },
            {
                question: "How do kidneys help maintain water balance?",
                options: ["By producing more blood", "By adjusting amount of water reabsorbed", "By making insulin", "By storing water"],
                correct: 1,
                difficulty: "medium",
                explanation: "Kidneys adjust how much water is reabsorbed back into blood versus lost in urine."
            },
            {
                question: "What controls kidney function?",
                options: ["Brain only", "ADH hormone", "Insulin", "Temperature"],
                correct: 1,
                difficulty: "medium",
                explanation: "ADH (antidiuretic hormone) controls how much water kidneys reabsorb."
            },
            {
                question: "What happens if you drink lots of water?",
                options: ["More concentrated urine", "More dilute urine", "No urine", "Kidney damage"],
                correct: 1,
                difficulty: "medium",
                explanation: "Excess water is removed by producing more dilute urine."
            },
            {
                question: "What happens if you're dehydrated?",
                options: ["More dilute urine", "More concentrated urine", "No urine", "More blood"],
                correct: 1,
                difficulty: "medium",
                explanation: "Water is conserved by producing more concentrated urine."
            },
            {
                question: "Why is homeostasis important?",
                options: ["For growth only", "Enzymes need optimal conditions to function", "For reproduction only", "It's not important"],
                correct: 1,
                difficulty: "medium",
                explanation: "Enzymes that control cell processes need stable conditions to function properly."
            },
            
            // HARD QUESTIONS (4)
            {
                question: "How does the body respond to eating a sugary meal?",
                options: ["Releases glucagon", "Releases insulin to lower blood sugar", "Does nothing", "Stores all as fat"],
                correct: 1,
                difficulty: "hard",
                explanation: "High blood sugar triggers insulin release, which moves glucose into cells and lowers blood sugar."
            },
            {
                question: "What is diabetes?",
                options: ["Kidney disease", "Problem with insulin production or action", "Heart disease", "Lung disease"],
                correct: 1,
                difficulty: "hard",
                explanation: "Diabetes occurs when the body cannot produce enough insulin or cells don't respond to insulin."
            },
            {
                question: "Why might someone with diabetes need insulin injections?",
                options: ["To increase blood sugar", "Their pancreas doesn't produce enough insulin", "To help digestion", "To control temperature"],
                correct: 1,
                difficulty: "hard",
                explanation: "Type 1 diabetics cannot produce insulin, so they need injections to control blood sugar."
            },
            {
                question: "How do receptors and effectors work in homeostasis?",
                options: ["They work independently", "Receptors detect changes, effectors respond", "They're the same thing", "Only effectors are important"],
                correct: 1,
                difficulty: "hard",
                explanation: "Receptors detect changes from normal, effectors respond to restore balance."
            }
        ],
        
        genetics: [
            // EASY QUESTIONS (10)
            {
                question: "What is DNA?",
                options: ["Type of protein", "Genetic material", "Type of cell", "Energy molecule"],
                correct: 1,
                difficulty: "easy",
                explanation: "DNA (deoxyribonucleic acid) is the genetic material that carries hereditary information."
            },
            {
                question: "Where is DNA found in the cell?",
                options: ["Mitochondria", "Cytoplasm", "Nucleus", "Cell membrane"],
                correct: 2,
                difficulty: "easy",
                explanation: "DNA is found in the nucleus of eukaryotic cells."
            },
            {
                question: "What is a gene?",
                options: ["Whole chromosome", "Section of DNA coding for a trait", "Type of cell", "Protein"],
                correct: 1,
                difficulty: "medium",
                explanation: "A gene is a section of DNA that codes for a specific characteristic or trait."
            },
            {
                question: "What are alleles?",
                options: ["Different chromosomes", "Different versions of the same gene", "Different cells", "Different proteins"],
                correct: 1,
                difficulty: "medium",
                explanation: "Alleles are different versions of the same gene that control the same characteristic."
            },
            {
                question: "How many chromosomes do humans have?",
                options: ["23", "46", "48", "22"],
                correct: 1,
                difficulty: "easy",
                explanation: "Humans have 46 chromosomes (23 pairs) in each body cell."
            },
            {
                question: "What determines the sex of offspring in humans?",
                options: ["Mother's chromosomes only", "Father's chromosomes only", "Both parents equally", "Random chance"],
                correct: 1,
                difficulty: "medium",
                explanation: "Sex is determined by the father's sperm - X chromosome for female, Y for male."
            },
            {
                question: "What are the sex chromosomes in females?",
                options: ["XY", "XX", "YY", "XZ"],
                correct: 1,
                difficulty: "easy",
                explanation: "Females have two X chromosomes (XX)."
            },
            {
                question: "What are the sex chromosomes in males?",
                options: ["XX", "XY", "YY", "XZ"],
                correct: 1,
                difficulty: "easy",
                explanation: "Males have one X and one Y chromosome (XY)."
            },
            {
                question: "What is inheritance?",
                options: ["Gaining weight", "Passing characteristics from parents to offspring", "Learning new skills", "Growing taller"],
                correct: 1,
                difficulty: "easy",
                explanation: "Inheritance is the passing of characteristics from parents to their offspring through genes."
            },
            {
                question: "What is variation?",
                options: ["All individuals being identical", "Differences between individuals", "Type of gene", "Form of reproduction"],
                correct: 1,
                difficulty: "easy",
                explanation: "Variation refers to differences between individuals of the same species."
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "What is the difference between genotype and phenotype?",
                options: ["No difference", "Genotype is genetic makeup, phenotype is physical appearance", "Genotype is appearance, phenotype is genes", "Both are the same"],
                correct: 1,
                difficulty: "medium",
                explanation: "Genotype is the genetic makeup (alleles), phenotype is the observable characteristics."
            },
            {
                question: "What is a dominant allele?",
                options: ["Allele that is always expressed", "Weakest allele", "Recessive allele", "Missing allele"],
                correct: 0,
                difficulty: "medium",
                explanation: "A dominant allele is expressed in the phenotype even when only one copy is present."
            },
            {
                question: "What is a recessive allele?",
                options: ["Always expressed", "Only expressed when two copies present", "Strongest allele", "Missing allele"],
                correct: 1,
                difficulty: "medium",
                explanation: "A recessive allele is only expressed when two copies are present (homozygous recessive)."
            },
            {
                question: "What does homozygous mean?",
                options: ["Two different alleles", "Two identical alleles", "One allele missing", "Three alleles present"],
                correct: 1,
                difficulty: "medium",
                explanation: "Homozygous means having two identical alleles for a characteristic."
            },
            {
                question: "What does heterozygous mean?",
                options: ["Two identical alleles", "Two different alleles", "No alleles", "Three alleles"],
                correct: 1,
                difficulty: "medium",
                explanation: "Heterozygous means having two different alleles for a characteristic."
            },
            {
                question: "What causes genetic variation?",
                options: ["Sexual reproduction and mutations", "Asexual reproduction only", "Environmental factors only", "Age"],
                correct: 0,
                difficulty: "medium",
                explanation: "Genetic variation is caused by sexual reproduction mixing genes and by mutations."
            },
            {
                question: "What is a mutation?",
                options: ["Normal gene", "Change in DNA sequence", "Type of cell division", "Form of reproduction"],
                correct: 1,
                difficulty: "medium",
                explanation: "A mutation is a random change in the DNA sequence."
            },
            {
                question: "How does sexual reproduction create variation?",
                options: ["It doesn't", "Combines genes from two parents", "Creates identical offspring", "Reduces variation"],
                correct: 1,
                difficulty: "medium",
                explanation: "Sexual reproduction combines genes from two parents, creating new combinations."
            },
            {
                question: "What is environmental variation?",
                options: ["Changes in genes", "Differences caused by environment", "Type of mutation", "Form of inheritance"],
                correct: 1,
                difficulty: "medium",
                explanation: "Environmental variation is caused by factors like diet, exercise, and climate."
            },
            {
                question: "What type of characteristic is ABO blood group?",
                options: ["Environmental only", "Single gene with multiple alleles", "Continuous variation", "Not inherited"],
                correct: 1,
                difficulty: "medium",
                explanation: "ABO blood group is controlled by a single gene with three possible alleles (A, B, O)."
            },
            {
                question: "What is continuous variation?",
                options: ["Distinct categories", "Range of values with no clear categories", "Two options only", "Random changes"],
                correct: 1,
                difficulty: "medium",
                explanation: "Continuous variation shows a range of values (like height) controlled by many genes."
            },
            
            // HARD QUESTIONS (4)
            {
                question: "If brown eyes (B) are dominant over blue eyes (b), what offspring result from Bb × bb?",
                options: ["All brown eyes", "All blue eyes", "50% brown, 50% blue", "75% brown, 25% blue"],
                correct: 2,
                difficulty: "hard",
                explanation: "Bb × bb gives 50% Bb (brown eyes) and 50% bb (blue eyes)."
            },
            {
                question: "In a cross between two heterozygous parents (Aa × Aa), what is the phenotype ratio?",
                options: ["1:1", "3:1", "1:2:1", "All dominant"],
                correct: 1,
                difficulty: "hard",
                explanation: "Aa × Aa gives genotype ratio 1 AA : 2 Aa : 1 aa, phenotype ratio 3 dominant : 1 recessive."
            },
            {
                question: "What is a genetic disorder?",
                options: ["Beneficial mutation", "Harmful change in genes", "Environmental damage", "Normal variation"],
                correct: 1,
                difficulty: "hard",
                explanation: "A genetic disorder is caused by harmful changes in genes that affect normal functioning."
            },
            {
                question: "How can genetic disorders be inherited?",
                options: ["From parents through genes", "From environment only", "Cannot be inherited", "From friends"],
                correct: 0,
                difficulty: "hard",
                explanation: "Many genetic disorders are inherited from parents through defective genes."
            }
        ],
        
        ecology: [
            // EASY QUESTIONS (10)
            {
                question: "What is an ecosystem?",
                options: ["Group of same species", "Living organisms only", "All living and non-living components in an area", "Just plants"],
                correct: 2,
                difficulty: "easy",
                explanation: "An ecosystem includes all living organisms and non-living factors in a particular area."
            },
            {
                question: "What is a food chain?",
                options: ["Random feeding", "Sequence showing who eats whom", "List of all animals", "Plant growth pattern"],
                correct: 1,
                difficulty: "easy",
                explanation: "A food chain shows the sequence of organisms where each feeds on the next."
            },
            {
                question: "What are producers in an ecosystem?",
                options: ["Animals that hunt", "Plants that make their own food", "Decomposers", "Top predators"],
                correct: 1,
                difficulty: "easy",
                explanation: "Producers (usually plants) make their own food through photosynthesis."
            },
            {
                question: "What are primary consumers?",
                options: ["Plants", "Animals that eat plants", "Animals that eat meat", "Decomposers"],
                correct: 1,
                difficulty: "easy",
                explanation: "Primary consumers are herbivores that eat producers (plants)."
            },
            {
                question: "What are secondary consumers?",
                options: ["Plants", "Animals that eat plants", "Animals that eat primary consumers", "Decomposers"],
                correct: 2,
                difficulty: "easy",
                explanation: "Secondary consumers are carnivores that eat primary consumers."
            },
            {
                question: "What are decomposers?",
                options: ["Top predators", "Primary consumers", "Organisms that break down dead material", "Plants"],
                correct: 2,
                difficulty: "medium",
                explanation: "Decomposers break down dead organisms and waste, recycling nutrients."
            },
            {
                question: "What happens to energy in food chains?",
                options: ["It increases at each level", "It stays the same", "It decreases at each level", "It disappears"],
                correct: 2,
                difficulty: "medium",
                explanation: "Energy decreases at each trophic level - only about 10% is passed on."
            },
            {
                question: "Why are food chains usually short?",
                options: ["Animals get tired", "Energy loss at each level", "Not enough space", "Too much competition"],
                correct: 1,
                difficulty: "easy",
                explanation: "Energy loss at each level limits the number of levels a food chain can support."
            },
            {
                question: "What is a food web?",
                options: ["Single food chain", "Many interconnected food chains", "Spider's web", "Plant roots"],
                correct: 1,
                difficulty: "easy",
                explanation: "A food web shows all the feeding relationships in an ecosystem."
            },
            {
                question: "What is a habitat?",
                options: ["Type of animal", "Place where organism lives", "Type of food", "Weather pattern"],
                correct: 1,
                difficulty: "easy",
                explanation: "A habitat is the place where an organism lives and obtains its resources."
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "What is biodiversity?",
                options: ["Number of plants only", "Variety of life in area", "Number of animals only", "Size of ecosystem"],
                correct: 1,
                difficulty: "medium",
                explanation: "Biodiversity is the variety of different species and genetic diversity in an ecosystem."
            },
            {
                question: "What factors affect population size?",
                options: ["Birth rate and death rate", "Immigration and emigration", "Food availability and disease", "All of the above"],
                correct: 3,
                difficulty: "medium",
                explanation: "Population size is affected by births, deaths, immigration, emigration, and environmental factors."
            },
            {
                question: "What is competition?",
                options: ["Cooperation between species", "Organisms fighting for same resources", "Helping each other", "Predation"],
                correct: 1,
                difficulty: "medium",
                explanation: "Competition occurs when organisms compete for the same limited resources."
            },
            {
                question: "What is predation?",
                options: ["Eating plants", "One organism killing and eating another", "Working together", "Making food"],
                correct: 1,
                difficulty: "medium",
                explanation: "Predation is when one organism (predator) kills and eats another (prey)."
            },
            {
                question: "How does predation affect population sizes?",
                options: ["No effect", "Predator and prey populations cycle", "Populations always increase", "Populations always decrease"],
                correct: 1,
                difficulty: "medium",
                explanation: "Predator and prey populations show cyclical changes - as one increases, the other responds."
            },
            {
                question: "What is an adaptation?",
                options: ["Learning new behavior", "Inherited feature that helps survival", "Getting bigger", "Moving location"],
                correct: 1,
                difficulty: "medium",
                explanation: "An adaptation is an inherited feature that increases an organism's chance of survival."
            },
            {
                question: "What are abiotic factors?",
                options: ["Living factors", "Non-living factors", "Animal factors only", "Plant factors only"],
                correct: 1,
                difficulty: "medium",
                explanation: "Abiotic factors are non-living environmental factors like temperature, light, and pH."
            },
            {
                question: "What are biotic factors?",
                options: ["Non-living factors", "Living factors", "Temperature only", "Light only"],
                correct: 1,
                difficulty: "medium",
                explanation: "Biotic factors are living environmental factors like other organisms, competition, and disease."
            },
            {
                question: "What is the carbon cycle?",
                options: ["Movement of carbon through environment", "Making carbon compounds", "Breaking down carbon", "Storing carbon only"],
                correct: 0,
                difficulty: "medium",
                explanation: "The carbon cycle shows how carbon moves between atmosphere, organisms, and environment."
            },
            {
                question: "How do humans affect carbon cycle?",
                options: ["No effect", "Burning fossil fuels increases CO2", "Decreasing CO2", "Only positive effects"],
                correct: 1,
                difficulty: "medium",
                explanation: "Human activities like burning fossil fuels increase atmospheric carbon dioxide levels."
            },
            {
                question: "What is deforestation?",
                options: ["Planting trees", "Cutting down forests", "Growing forests", "Protecting forests"],
                correct: 1,
                difficulty: "medium",
                explanation: "Deforestation is the clearing or removal of forests for other land uses."
            },
            
            // HARD QUESTIONS (4)
            {
                question: "Why is deforestation a problem for the carbon cycle?",
                options: ["Trees release CO2", "Fewer trees to absorb CO2 from atmosphere", "Trees produce oxygen", "No effect on carbon cycle"],
                correct: 1,
                difficulty: "hard",
                explanation: "Trees absorb CO2 during photosynthesis, so fewer trees means more CO2 stays in atmosphere."
            },
            {
                question: "How does population growth affect ecosystems?",
                options: ["No effect", "Increases demand for resources and space", "Always improves ecosystems", "Only affects cities"],
                correct: 1,
                difficulty: "hard",
                explanation: "Growing human population increases demand for land, food, and resources, affecting natural ecosystems."
            },
            {
                question: "What is conservation?",
                options: ["Using all resources quickly", "Protecting and managing natural resources", "Ignoring environmental problems", "Building more cities"],
                correct: 1,
                difficulty: "hard",
                explanation: "Conservation involves protecting and sustainably managing natural resources and ecosystems."
            },
            {
                question: "Why is maintaining biodiversity important?",
                options: ["It's not important", "Provides resources and maintains ecosystem stability", "Only for decoration", "Costs too much money"],
                correct: 1,
                difficulty: "hard",
                explanation: "Biodiversity provides resources, maintains ecosystem stability, and has potential medical and agricultural benefits."
            }
        ],
        
        evolution: [
            // EASY QUESTIONS (10)
            {
                question: "What is evolution?",
                options: ["Rapid change in one generation", "Change in species over time", "Growth of individuals", "Learning new behaviors"],
                correct: 1,
                difficulty: "easy",
                explanation: "Evolution is the gradual change in species over many generations."
            },
            {
                question: "Who proposed the theory of evolution by natural selection?",
                options: ["Albert Einstein", "Charles Darwin", "Isaac Newton", "Gregor Mendel"],
                correct: 1,
                difficulty: "easy",
                explanation: "Charles Darwin proposed the theory of evolution by natural selection."
            },
            {
                question: "What is natural selection?",
                options: ["Random changes", "Survival of organisms best adapted to environment", "Artificial breeding", "Conscious choice by animals"],
                correct: 1,
                difficulty: "medium",
                explanation: "Natural selection is when organisms best adapted to their environment survive and reproduce."
            },
            {
                question: "What causes variation in species?",
                options: ["Identical reproduction", "Genetic mutations and sexual reproduction", "Environmental factors only", "Nothing"],
                correct: 1,
                difficulty: "medium",
                explanation: "Variation is caused by genetic mutations and sexual reproduction mixing genes."
            },
            {
                question: "What happens to beneficial characteristics?",
                options: ["They disappear", "They become more common in population", "They stay the same", "They become harmful"],
                correct: 1,
                difficulty: "easy",
                explanation: "Beneficial characteristics help survival and reproduction, so become more common over time."
            },
            {
                question: "What happens to harmful characteristics?",
                options: ["They become more common", "They become less common or disappear", "They stay the same", "They become beneficial"],
                correct: 1,
                difficulty: "easy",
                explanation: "Harmful characteristics reduce survival and reproduction, so become less common."
            },
            {
                question: "What is adaptation?",
                options: ["Learning new skills", "Inherited features that help survival", "Getting older", "Moving to new places"],
                correct: 1,
                difficulty: "easy",
                explanation: "Adaptations are inherited features that increase an organism's chance of survival and reproduction."
            },
            {
                question: "How long does evolution take?",
                options: ["Days", "Weeks", "Many generations", "One generation"],
                correct: 2,
                difficulty: "easy",
                explanation: "Evolution is a gradual process that takes many generations to show significant changes."
            },
            {
                question: "What is extinction?",
                options: ["Birth of new species", "Complete disappearance of species", "Species changing color", "Species moving location"],
                correct: 1,
                difficulty: "easy",
                explanation: "Extinction occurs when the last individual of a species dies."
            },
            {
                question: "What can cause extinction?",
                options: ["Environmental changes", "Competition", "Disease", "All of the above"],
                correct: 3,
                difficulty: "easy",
                explanation: "Extinction can be caused by environmental changes, competition, disease, or human activities."
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "What evidence supports the theory of evolution?",
                options: ["Fossils only", "DNA only", "Fossils, DNA, and anatomical similarities", "None"],
                correct: 2,
                difficulty: "medium",
                explanation: "Multiple lines of evidence support evolution: fossils, DNA similarities, anatomical structures, and biogeography."
            },
            {
                question: "What do fossils show?",
                options: ["Species never change", "Gradual changes in species over time", "All species exist together", "Nothing useful"],
                correct: 1,
                difficulty: "medium",
                explanation: "Fossils show how species have gradually changed over millions of years."
            },
            {
                question: "How do new species form?",
                options: ["Overnight", "When populations become isolated and evolve differently", "By choice", "Never"],
                correct: 1,
                difficulty: "hard",
                explanation: "New species form when populations are separated and evolve different characteristics over time."
            },
            {
                question: "What is selective breeding?",
                options: ["Natural selection", "Humans choosing which organisms breed", "Random breeding", "No breeding"],
                correct: 1,
                difficulty: "medium",
                explanation: "Selective breeding is when humans choose which organisms reproduce to get desired characteristics."
            },
            {
                question: "How does selective breeding provide evidence for evolution?",
                options: ["It doesn't", "Shows characteristics can change over generations", "Proves species never change", "Has no connection"],
                correct: 1,
                difficulty: "medium",
                explanation: "Selective breeding demonstrates that characteristics can change over generations through selection."
            },
            {
                question: "What is antibiotic resistance?",
                options: ["Bacteria becoming immune to antibiotics", "Antibiotics becoming stronger", "People becoming immune", "Viruses dying"],
                correct: 0,
                difficulty: "medium",
                explanation: "Antibiotic resistance occurs when bacteria evolve to survive antibiotic treatment."
            },
            {
                question: "How does antibiotic resistance develop?",
                options: ["Bacteria learn to resist", "Natural selection favors resistant bacteria", "Antibiotics teach bacteria", "It's random"],
                correct: 1,
                difficulty: "medium",
                explanation: "Resistant bacteria survive antibiotic treatment and reproduce, passing resistance to offspring."
            },
            {
                question: "What are homologous structures?",
                options: ["Identical structures", "Similar structures from common ancestor", "Different structures", "New structures"],
                correct: 1,
                difficulty: "medium",
                explanation: "Homologous structures are similar structures in different species inherited from common ancestor."
            },
            {
                question: "What do similarities in DNA between species suggest?",
                options: ["No relationship", "Common ancestry", "Identical functions", "Random occurrence"],
                correct: 1,
                difficulty: "medium",
                explanation: "Similar DNA sequences suggest species share common ancestors."
            },
            {
                question: "What is biogeography?",
                options: ["Study of rocks", "Distribution of species around world", "Study of weather", "Study of cities"],
                correct: 1,
                difficulty: "medium",
                explanation: "Biogeography studies the distribution of species and supports evolution theory."
            },
            {
                question: "Why are similar species found on nearby islands?",
                options: ["Coincidence", "They evolved from common ancestor", "They were placed there", "They swim between islands"],
                correct: 1,
                difficulty: "medium",
                explanation: "Similar species on nearby islands likely evolved from common ancestors that colonized the area."
            },
            
            // HARD QUESTIONS (4)
            {
                question: "How does the evolution of drug resistance in HIV support evolution theory?",
                options: ["It doesn't", "Shows rapid evolution through natural selection", "HIV doesn't evolve", "Drugs make HIV stronger"],
                correct: 1,
                difficulty: "hard",
                explanation: "HIV rapidly evolves drug resistance through natural selection, demonstrating evolution in real time."
            },
            {
                question: "What is convergent evolution?",
                options: ["Species becoming identical", "Similar features evolving independently in different lineages", "All evolution happening together", "Evolution stopping"],
                correct: 1,
                difficulty: "hard",
                explanation: "Convergent evolution occurs when similar environmental pressures lead to similar adaptations in unrelated species."
            },
            {
                question: "Why might evolution appear to have gaps in fossil record?",
                options: ["Evolution has gaps", "Fossilization is rare and incomplete", "Fossils are fake", "Species don't change"],
                correct: 1,
                difficulty: "hard",
                explanation: "Fossil formation requires specific conditions, so the fossil record is incomplete."
            },
            {
                question: "How do molecular clocks work in evolution?",
                options: ["They don't work", "Rate of DNA mutations estimates time since species diverged", "They measure age of fossils", "They predict future evolution"],
                correct: 1,
                difficulty: "hard",
                explanation: "Molecular clocks use the rate of DNA mutations to estimate when species last shared a common ancestor."
            }
        ],
        
        humanBiology: [
            // EASY QUESTIONS (10)
            {
                question: "What is the function of red blood cells?",
                options: ["Fighting infection", "Carrying oxygen", "Clotting blood", "Producing hormones"],
                correct: 1,
                difficulty: "easy",
                explanation: "Red blood cells contain hemoglobin which carries oxygen around the body."
            },
            {
                question: "What is the function of white blood cells?",
                options: ["Carrying oxygen", "Fighting infection", "Transporting nutrients", "Clotting blood"],
                correct: 1,
                difficulty: "easy",
                explanation: "White blood cells defend the body against infections and diseases."
            },
            {
                question: "What is the heart's function?",
                options: ["Filtering blood", "Pumping blood around the body", "Making blood", "Storing blood"],
                correct: 1,
                difficulty: "easy",
                explanation: "The heart pumps blood around the body to deliver oxygen and nutrients."
            },
            {
                question: "What is the function of the lungs?",
                options: ["Pumping blood", "Gas exchange - oxygen in, carbon dioxide out", "Filtering blood", "Making blood"],
                correct: 1,
                difficulty: "easy",
                explanation: "Lungs allow gas exchange - oxygen enters blood, carbon dioxide leaves."
            },
            {
                question: "What is the function of kidneys?",
                options: ["Pumping blood", "Gas exchange", "Filtering waste from blood", "Digesting food"],
                correct: 2,
                difficulty: "easy",
                explanation: "Kidneys filter waste products and excess water from the blood to form urine."
            },
            {
                question: "What carries oxygen in blood?",
                options: ["Plasma", "White blood cells", "Hemoglobin in red blood cells", "Platelets"],
                correct: 2,
                difficulty: "easy",
                explanation: "Hemoglobin in red blood cells binds to oxygen and carries it around the body."
            },
            {
                question: "What helps blood to clot?",
                options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
                correct: 2,
                difficulty: "easy",
                explanation: "Platelets help blood clot at wounds to prevent blood loss."
            },
            {
                question: "Where does gas exchange occur in the lungs?",
                options: ["Bronchi", "Trachea", "Alveoli", "Diaphragm"],
                correct: 2,
                difficulty: "easy",
                explanation: "Gas exchange occurs in the alveoli - tiny air sacs in the lungs."
            },
            {
                question: "What is the liquid part of blood called?",
                options: ["Serum", "Plasma", "Hemoglobin", "Lymph"],
                correct: 1,
                difficulty: "easy",
                explanation: "Plasma is the liquid part of blood that carries cells and dissolved substances."
            },
            {
                question: "What muscle controls breathing?",
                options: ["Heart muscle", "Diaphragm", "Stomach muscle", "Leg muscle"],
                correct: 1,
                difficulty: "easy",
                explanation: "The diaphragm is the main muscle used for breathing."
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "What are the main types of blood vessels?",
                options: ["Arteries and veins only", "Arteries, veins, and capillaries", "Capillaries only", "Arteries only"],
                correct: 1,
                difficulty: "medium",
                explanation: "The three main types of blood vessels are arteries, veins, and capillaries."
            },
            {
                question: "What do arteries do?",
                options: ["Carry blood to heart", "Carry blood away from heart", "Store blood", "Make blood"],
                correct: 1,
                difficulty: "medium",
                explanation: "Arteries carry blood away from the heart to the body tissues."
            },
            {
                question: "What do veins do?",
                options: ["Carry blood away from heart", "Carry blood to heart", "Store blood", "Filter blood"],
                correct: 1,
                difficulty: "medium",
                explanation: "Veins carry blood back to the heart from the body tissues."
            },
            {
                question: "What do capillaries do?",
                options: ["Pump blood", "Allow exchange between blood and tissues", "Store blood", "Make blood"],
                correct: 1,
                difficulty: "medium",
                explanation: "Capillaries are tiny vessels where exchange of materials occurs between blood and tissues."
            },
            {
                question: "What is the pathway of air during breathing?",
                options: ["Mouth → lungs", "Nose/mouth → trachea → bronchi → bronchioles → alveoli", "Nose → stomach", "Mouth → heart"],
                correct: 1,
                difficulty: "medium",
                explanation: "Air travels: nose/mouth → trachea → bronchi → bronchioles → alveoli."
            },
            {
                question: "How are alveoli adapted for gas exchange?",
                options: ["Thick walls", "Large surface area and thin walls", "Small surface area", "No blood supply"],
                correct: 1,
                difficulty: "medium",
                explanation: "Alveoli have large surface area, thin walls, and rich blood supply for efficient gas exchange."
            },
            {
                question: "What is the double circulation system?",
                options: ["Heart beats twice", "Blood passes through heart twice in complete circuit", "Two hearts", "Blood flows both ways"],
                correct: 1,
                difficulty: "medium",
                explanation: "Blood passes through the heart twice: once to lungs, once to body."
            },
            {
                question: "What is the difference between oxygenated and deoxygenated blood?",
                options: ["Color only", "Oxygen content", "Temperature", "Speed of flow"],
                correct: 1,
                difficulty: "medium",
                explanation: "Oxygenated blood carries oxygen; deoxygenated blood has less oxygen and more carbon dioxide."
            },
            {
                question: "What causes coronary heart disease?",
                options: ["Too much exercise", "Fatty deposits blocking coronary arteries", "Weak heart muscle", "High blood pressure only"],
                correct: 1,
                difficulty: "medium",
                explanation: "Coronary heart disease occurs when fatty deposits block the arteries supplying the heart muscle."
            },
            {
                question: "What factors increase risk of heart disease?",
                options: ["Poor diet and smoking", "Lack of exercise", "High blood pressure", "All of the above"],
                correct: 3,
                difficulty: "medium",
                explanation: "Risk factors include poor diet, smoking, lack of exercise, and high blood pressure."
            },
            {
                question: "What is the immune system?",
                options: ["System that pumps blood", "Body's defense against disease", "System that digests food", "System that controls movement"],
                correct: 1,
                difficulty: "medium",
                explanation: "The immune system defends the body against pathogens and foreign substances."
            },
            
            // HARD QUESTIONS (4)
            {
                question: "How do vaccines work?",
                options: ["Kill all bacteria", "Introduce weakened pathogens to stimulate immunity", "Boost energy levels", "Cure diseases directly"],
                correct: 1,
                difficulty: "hard",
                explanation: "Vaccines introduce weakened or dead pathogens to stimulate the immune system to produce antibodies."
            },
            {
                question: "What is the difference between antibiotics and vaccines?",
                options: ["No difference", "Antibiotics treat bacterial infections, vaccines prevent diseases", "Antibiotics prevent disease", "Vaccines treat infections"],
                correct: 1,
                difficulty: "hard",
                explanation: "Antibiotics treat existing bacterial infections; vaccines prevent diseases by providing immunity."
            },
            {
                question: "Why don't antibiotics work against viruses?",
                options: ["Viruses are too small", "Viruses don't have cell walls or metabolic processes antibiotics target", "Viruses are too strong", "Antibiotics are too weak"],
                correct: 1,
                difficulty: "hard",
                explanation: "Antibiotics target bacterial cell walls and processes that viruses don't have."
            },
            {
                question: "What is the role of memory cells in immunity?",
                options: ["Store memories", "Remember pathogens for faster response", "Control breathing", "Filter blood"],
                correct: 1,
                difficulty: "hard",
                explanation: "Memory cells remember previous infections and respond rapidly if the same pathogen returns."
            }
        ]
    },
    
    math: {
        unitConversions: [
            // EASY QUESTIONS (10)
            {
                question: "How many millimeters are in 1 meter?",
                options: ["10", "100", "1000", "10000"],
                correct: 2,
                difficulty: "easy",
                explanation: "1 meter = 1000 millimeters. Milli means 1/1000."
            },
            {
                question: "Convert 2.5 kg to grams:",
                options: ["25 g", "250 g", "2500 g", "25000 g"],
                correct: 2,
                difficulty: "easy",
                explanation: "1 kg = 1000 g, so 2.5 kg = 2.5 × 1000 = 2500 g"
            },
            {
                question: "How many centimeters are in 0.5 meters?",
                options: ["5 cm", "50 cm", "500 cm", "5000 cm"],
                correct: 1,
                difficulty: "easy",
                explanation: "1 m = 100 cm, so 0.5 m = 0.5 × 100 = 50 cm"
            },
            {
                question: "Convert 750 mL to liters:",
                options: ["0.75 L", "7.5 L", "75 L", "750 L"],
                correct: 0,
                difficulty: "medium",
                explanation: "1000 mL = 1 L, so 750 mL = 750 ÷ 1000 = 0.75 L"
            },
            {
                question: "How many seconds are in 2.5 minutes?",
                options: ["25 s", "150 s", "250 s", "2500 s"],
                correct: 1,
                difficulty: "easy",
                explanation: "1 minute = 60 seconds, so 2.5 minutes = 2.5 × 60 = 150 seconds"
            },
            {
                question: "Convert 3 km to meters:",
                options: ["30 m", "300 m", "3000 m", "30000 m"],
                correct: 2,
                difficulty: "easy",
                explanation: "1 km = 1000 m, so 3 km = 3 × 1000 = 3000 m"
            },
            {
                question: "How many grams are in 0.25 kg?",
                options: ["25 g", "250 g", "2500 g", "0.25 g"],
                correct: 1,
                difficulty: "easy",
                explanation: "1 kg = 1000 g, so 0.25 kg = 0.25 × 1000 = 250 g"
            },
            {
                question: "Convert 4.2 L to mL:",
                options: ["42 mL", "420 mL", "4200 mL", "42000 mL"],
                correct: 2,
                difficulty: "easy",
                explanation: "1 L = 1000 mL, so 4.2 L = 4.2 × 1000 = 4200 mL"
            },
            {
                question: "How many hours are in 180 minutes?",
                options: ["2 hours", "3 hours", "4 hours", "18 hours"],
                correct: 1,
                difficulty: "easy",
                explanation: "60 minutes = 1 hour, so 180 minutes = 180 ÷ 60 = 3 hours"
            },
            {
                question: "Convert 50 mm to cm:",
                options: ["5 cm", "50 cm", "500 cm", "0.5 cm"],
                correct: 0,
                difficulty: "easy",
                explanation: "10 mm = 1 cm, so 50 mm = 50 ÷ 10 = 5 cm"
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "A recipe calls for 250 mL of milk. How many liters is this?",
                options: ["0.25 L", "2.5 L", "25 L", "0.025 L"],
                correct: 0,
                difficulty: "medium",
                explanation: "250 mL = 250 ÷ 1000 = 0.25 L"
            },
            {
                question: "Convert 1.5 hours to minutes:",
                options: ["15 min", "60 min", "90 min", "150 min"],
                correct: 2,
                difficulty: "medium",
                explanation: "1 hour = 60 minutes, so 1.5 hours = 1.5 × 60 = 90 minutes"
            },
            {
                question: "A room is 4.5 m long. How many centimeters is this?",
                options: ["45 cm", "450 cm", "4500 cm", "0.45 cm"],
                correct: 1,
                difficulty: "medium",
                explanation: "1 m = 100 cm, so 4.5 m = 4.5 × 100 = 450 cm"
            },
            {
                question: "Convert 2.4 kg to grams:",
                options: ["24 g", "240 g", "2400 g", "24000 g"],
                correct: 2,
                difficulty: "medium",
                explanation: "1 kg = 1000 g, so 2.4 kg = 2.4 × 1000 = 2400 g"
            },
            {
                question: "How many millimeters are in 7.3 cm?",
                options: ["73 mm", "0.73 mm", "730 mm", "7.3 mm"],
                correct: 0,
                difficulty: "medium",
                explanation: "1 cm = 10 mm, so 7.3 cm = 7.3 × 10 = 73 mm"
            },
            {
                question: "Convert 0.8 L to mL:",
                options: ["8 mL", "80 mL", "800 mL", "8000 mL"],
                correct: 2,
                difficulty: "medium",
                explanation: "1 L = 1000 mL, so 0.8 L = 0.8 × 1000 = 800 mL"
            },
            {
                question: "A race is 5000 m long. How many kilometers is this?",
                options: ["0.5 km", "5 km", "50 km", "500 km"],
                correct: 1,
                difficulty: "medium",
                explanation: "1000 m = 1 km, so 5000 m = 5000 ÷ 1000 = 5 km"
            },
            {
                question: "Convert 45 minutes to hours:",
                options: ["0.45 hours", "0.75 hours", "4.5 hours", "1.75 hours"],
                correct: 1,
                difficulty: "medium",
                explanation: "45 minutes = 45 ÷ 60 = 0.75 hours"
            },
            {
                question: "How many grams are in 3.2 kg?",
                options: ["32 g", "320 g", "3200 g", "32000 g"],
                correct: 2,
                difficulty: "medium",
                explanation: "1 kg = 1000 g, so 3.2 kg = 3.2 × 1000 = 3200 g"
            },
            {
                question: "Convert 1200 seconds to minutes:",
                options: ["12 min", "20 min", "120 min", "200 min"],
                correct: 1,
                difficulty: "medium",
                explanation: "60 seconds = 1 minute, so 1200 seconds = 1200 ÷ 60 = 20 minutes"
            },
            {
                question: "A bottle contains 2.5 L of water. How many 250 mL glasses can be filled?",
                options: ["5", "10", "15", "25"],
                correct: 1,
                difficulty: "medium",
                explanation: "2.5 L = 2500 mL. Number of glasses = 2500 ÷ 250 = 10"
            },
            
            // HARD QUESTIONS (4)
            {
                question: "Convert 0.025 km to mm:",
                options: ["250 mm", "2500 mm", "25000 mm", "250000 mm"],
                correct: 2,
                difficulty: "hard",
                explanation: "0.025 km = 25 m = 2500 cm = 25000 mm"
            },
            {
                question: "A car travels at 72 km/h. What is this speed in m/s?",
                options: ["20 m/s", "72 m/s", "259 m/s", "7.2 m/s"],
                correct: 0,
                difficulty: "hard",
                explanation: "72 km/h = 72 × 1000 ÷ 3600 = 72000 ÷ 3600 = 20 m/s"
            },
            {
                question: "How many cubic centimeters are in 2.5 liters?",
                options: ["25 cm³", "250 cm³", "2500 cm³", "25000 cm³"],
                correct: 2,
                difficulty: "hard",
                explanation: "1 L = 1000 cm³, so 2.5 L = 2.5 × 1000 = 2500 cm³"
            },
            {
                question: "Convert 3 days to seconds:",
                options: ["259200 s", "72000 s", "86400 s", "172800 s"],
                correct: 0,
                difficulty: "hard",
                explanation: "3 days = 3 × 24 × 60 × 60 = 3 × 86400 = 259200 seconds"
            }
        ],
        
        equationManipulation: [
            // EASY QUESTIONS (10)
            {
                question: "If F = ma, what is m equal to?",
                options: ["m = F + a", "m = F - a", "m = F/a", "m = Fa"],
                correct: 2,
                difficulty: "easy",
                explanation: "Dividing both sides of F = ma by a gives m = F/a"
            },
            {
                question: "Rearrange V = IR to make R the subject:",
                options: ["R = V - I", "R = V + I", "R = V/I", "R = VI"],
                correct: 2,
                difficulty: "easy",
                explanation: "Dividing both sides of V = IR by I gives R = V/I"
            },
            {
                question: "If P = IV, what is I equal to?",
                options: ["I = P + V", "I = P - V", "I = P/V", "I = PV"],
                correct: 2,
                difficulty: "easy",
                explanation: "Dividing both sides of P = IV by V gives I = P/V"
            },
            {
                question: "Rearrange s = ut + ½at² to make u the subject:",
                options: ["u = s - ½at²/t", "u = (s - ½at²)/t", "u = s + ½at²", "u = st - ½at²"],
                correct: 1,
                difficulty: "easy",
                explanation: "s = ut + ½at², so s - ½at² = ut, therefore u = (s - ½at²)/t"
            },
            {
                question: "If y = mx + c, what is x equal to?",
                options: ["x = (y - c)/m", "x = (y + c)/m", "x = y - c + m", "x = my - c"],
                correct: 0,
                difficulty: "easy",
                explanation: "y = mx + c, so y - c = mx, therefore x = (y - c)/m"
            },
            {
                question: "Rearrange E = mc² to make m the subject:",
                options: ["m = E - c²", "m = E + c²", "m = E/c²", "m = Ec²"],
                correct: 2,
                difficulty: "easy",
                explanation: "Dividing both sides of E = mc² by c² gives m = E/c²"
            },
            {
                question: "If W = Fd, what is d equal to?",
                options: ["d = W + F", "d = W - F", "d = W/F", "d = WF"],
                correct: 2,
                difficulty: "easy",
                explanation: "Dividing both sides of W = Fd by F gives d = W/F"
            },
            {
                question: "Rearrange Q = It to make t the subject:",
                options: ["t = Q + I", "t = Q - I", "t = Q/I", "t = QI"],
                correct: 2,
                difficulty: "easy",
                explanation: "Dividing both sides of Q = It by I gives t = Q/I"
            },
            {
                question: "If C = 2πr, what is r equal to?",
                options: ["r = C - 2π", "r = C + 2π", "r = C/(2π)", "r = C(2π)"],
                correct: 2,
                difficulty: "easy",
                explanation: "Dividing both sides of C = 2πr by 2π gives r = C/(2π)"
            },
            {
                question: "Rearrange PV = nRT to make T the subject:",
                options: ["T = PV - nR", "T = PV + nR", "T = PV/(nR)", "T = PV(nR)"],
                correct: 2,
                difficulty: "easy",
                explanation: "Dividing both sides of PV = nRT by nR gives T = PV/(nR)"
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "If v = u + at, what is t equal to?",
                options: ["t = v - u - a", "t = (v - u)/a", "t = a(v - u)", "t = v + u + a"],
                correct: 1,
                difficulty: "medium",
                explanation: "Rearranging v = u + at: subtract u from both sides, then divide by a: t = (v - u)/a"
            },
            {
                question: "If A = πr², what is r equal to?",
                options: ["r = A/π", "r = √(A/π)", "r = A²/π", "r = π/A"],
                correct: 1,
                difficulty: "hard",
                explanation: "Dividing by π: r² = A/π, then taking square root: r = √(A/π)"
            },
            {
                question: "Rearrange v² = u² + 2as to make s the subject:",
                options: ["s = (v² - u²)/2a", "s = (v² + u²)/2a", "s = 2a(v² - u²)", "s = v² - u² - 2a"],
                correct: 0,
                difficulty: "medium",
                explanation: "v² = u² + 2as, so v² - u² = 2as, therefore s = (v² - u²)/2a"
            },
            {
                question: "If 1/f = 1/u + 1/v, what is f equal to?",
                options: ["f = u + v", "f = uv/(u + v)", "f = (u + v)/uv", "f = u - v"],
                correct: 1,
                difficulty: "medium",
                explanation: "1/f = 1/u + 1/v = (v + u)/(uv), so f = uv/(u + v)"
            },
            {
                question: "Rearrange T = 2π√(l/g) to make l the subject:",
                options: ["l = gT²/(4π²)", "l = T²g", "l = 4π²/(gT²)", "l = T/(2πg)"],
                correct: 0,
                difficulty: "medium",
                explanation: "T = 2π√(l/g), so T/(2π) = √(l/g), squaring: T²/(4π²) = l/g, so l = gT²/(4π²)"
            },
            {
                question: "If a = (v - u)/t, what is v equal to?",
                options: ["v = at + u", "v = at - u", "v = a - ut", "v = u - at"],
                correct: 0,
                difficulty: "medium",
                explanation: "a = (v - u)/t, so at = v - u, therefore v = at + u"
            },
            {
                question: "Rearrange P = F/A to make A the subject:",
                options: ["A = P + F", "A = P - F", "A = F/P", "A = FP"],
                correct: 2,
                difficulty: "medium",
                explanation: "P = F/A, so PA = F, therefore A = F/P"
            },
            {
                question: "If KE = ½mv², what is v equal to?",
                options: ["v = √(2KE/m)", "v = 2KE/m", "v = √(KE/2m)", "v = KE/(2m)"],
                correct: 0,
                difficulty: "medium",
                explanation: "KE = ½mv², so 2KE = mv², therefore v² = 2KE/m, so v = √(2KE/m)"
            },
            {
                question: "Rearrange s = ½(u + v)t to make v the subject:",
                options: ["v = 2s/t - u", "v = 2s/t + u", "v = s/t - u", "v = st - u"],
                correct: 0,
                difficulty: "medium",
                explanation: "s = ½(u + v)t, so 2s = (u + v)t, so 2s/t = u + v, therefore v = 2s/t - u"
            },
            {
                question: "If R = ρl/A, what is A equal to?",
                options: ["A = Rρl", "A = ρl/R", "A = R/(ρl)", "A = ρl - R"],
                correct: 1,
                difficulty: "medium",
                explanation: "R = ρl/A, so RA = ρl, therefore A = ρl/R"
            },
            {
                question: "Rearrange F = Gm₁m₂/r² to make r the subject:",
                options: ["r = √(Gm₁m₂/F)", "r = Gm₁m₂/F", "r = F/(Gm₁m₂)", "r = √(F/(Gm₁m₂))"],
                correct: 0,
                difficulty: "medium",
                explanation: "F = Gm₁m₂/r², so Fr² = Gm₁m₂, so r² = Gm₁m₂/F, therefore r = √(Gm₁m₂/F)"
            },
            
            // HARD QUESTIONS (4)
            {
                question: "If x = (-b ± √(b² - 4ac))/2a, what is a equal to?",
                options: ["a = (-b ± √(b² - 4ac))/2x", "a = (b² - 4ac)/(2x + b)²", "Complex rearrangement", "a = -b/2x"],
                correct: 2,
                difficulty: "hard",
                explanation: "This quadratic formula rearrangement is complex and requires careful algebraic manipulation."
            },
            {
                question: "Rearrange 1/R = 1/R₁ + 1/R₂ to make R₁ the subject:",
                options: ["R₁ = RR₂/(R₂ - R)", "R₁ = R₂ - R", "R₁ = R + R₂", "R₁ = R₂/R"],
                correct: 0,
                difficulty: "hard",
                explanation: "1/R = 1/R₁ + 1/R₂, so 1/R₁ = 1/R - 1/R₂ = (R₂ - R)/(RR₂), so R₁ = RR₂/(R₂ - R)"
            },
            {
                question: "If y = ax² + bx + c, rearrange to make x the subject:",
                options: ["x = (-b ± √(b² - 4a(c-y)))/2a", "x = (y - c)/b", "x = √((y-c)/a)", "x = y - b - c"],
                correct: 0,
                difficulty: "hard",
                explanation: "Rearranging gives ax² + bx + (c-y) = 0, using quadratic formula: x = (-b ± √(b² - 4a(c-y)))/2a"
            },
            {
                question: "Rearrange T = 2π√(m/k) to make k the subject:",
                options: ["k = 4π²m/T²", "k = T²/(4π²m)", "k = 2πm/T", "k = mT²"],
                correct: 0,
                difficulty: "hard",
                explanation: "T = 2π√(m/k), so T/(2π) = √(m/k), squaring: T²/(4π²) = m/k, so k = 4π²m/T²"
            }
        ],
        
        standardForm: [
            // EASY QUESTIONS (10)
            {
                question: "Write 5000 in standard form:",
                options: ["5 × 10³", "50 × 10²", "5 × 10⁴", "0.5 × 10⁴"],
                correct: 0,
                difficulty: "easy",
                explanation: "5000 = 5.0 × 1000 = 5 × 10³"
            },
            {
                question: "What is 3.2 × 10⁴ in normal form?",
                options: ["320", "3200", "32000", "320000"],
                correct: 2,
                difficulty: "easy",
                explanation: "3.2 × 10⁴ = 3.2 × 10000 = 32000"
            },
            {
                question: "Write 0.0045 in standard form:",
                options: ["4.5 × 10⁻³", "4.5 × 10⁻⁴", "45 × 10⁻⁴", "0.45 × 10⁻²"],
                correct: 0,
                difficulty: "medium",
                explanation: "0.0045 = 4.5 × 10⁻³ (move decimal point 3 places right)"
            },
            {
                question: "What is 7.89 × 10⁻³ in normal form?",
                options: ["0.789", "0.0789", "0.00789", "0.000789"],
                correct: 2,
                difficulty: "medium",
                explanation: "7.89 × 10⁻³ = 7.89 × 0.001 = 0.00789"
            },
            {
                question: "Write 250000 in standard form:",
                options: ["2.5 × 10⁵", "25 × 10⁴", "2.5 × 10⁶", "0.25 × 10⁶"],
                correct: 0,
                difficulty: "easy",
                explanation: "250000 = 2.5 × 100000 = 2.5 × 10⁵"
            },
            {
                question: "What is 6.7 × 10² in normal form?",
                options: ["67", "670", "6700", "0.67"],
                correct: 1,
                difficulty: "easy",
                explanation: "6.7 × 10² = 6.7 × 100 = 670"
            },
            {
                question: "Write 0.025 in standard form:",
                options: ["2.5 × 10⁻²", "25 × 10⁻³", "2.5 × 10⁻³", "0.25 × 10⁻¹"],
                correct: 0,
                difficulty: "easy",
                explanation: "0.025 = 2.5 × 10⁻² (move decimal point 2 places right)"
            },
            {
                question: "What is 1.23 × 10⁻¹ in normal form?",
                options: ["1.23", "0.123", "12.3", "0.0123"],
                correct: 1,
                difficulty: "easy",
                explanation: "1.23 × 10⁻¹ = 1.23 × 0.1 = 0.123"
            },
            {
                question: "Write 80000 in standard form:",
                options: ["8 × 10⁴", "80 × 10³", "8 × 10⁵", "0.8 × 10⁵"],
                correct: 0,
                difficulty: "easy",
                explanation: "80000 = 8.0 × 10000 = 8 × 10⁴"
            },
            {
                question: "What is 4.56 × 10³ in normal form?",
                options: ["456", "4560", "45600", "0.456"],
                correct: 1,
                difficulty: "easy",
                explanation: "4.56 × 10³ = 4.56 × 1000 = 4560"
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "Calculate (2 × 10³) × (3 × 10²):",
                options: ["6 × 10⁵", "6 × 10⁶", "5 × 10⁵", "5 × 10⁶"],
                correct: 0,
                difficulty: "medium",
                explanation: "(2 × 10³) × (3 × 10²) = (2 × 3) × (10³ × 10²) = 6 × 10⁵"
            },
            {
                question: "Calculate (8 × 10⁴) ÷ (2 × 10²):",
                options: ["4 × 10²", "4 × 10⁶", "16 × 10²", "6 × 10²"],
                correct: 0,
                difficulty: "medium",
                explanation: "(8 × 10⁴) ÷ (2 × 10²) = (8 ÷ 2) × (10⁴ ÷ 10²) = 4 × 10²"
            },
            {
                question: "Calculate (5 × 10⁻²) × (4 × 10³):",
                options: ["20 × 10¹", "2 × 10²", "20 × 10⁵", "2 × 10¹"],
                correct: 3,
                difficulty: "medium",
                explanation: "(5 × 10⁻²) × (4 × 10³) = (5 × 4) × (10⁻² × 10³) = 20 × 10¹ = 2 × 10²"
            },
            {
                question: "Write 0.000067 in standard form:",
                options: ["6.7 × 10⁻⁵", "67 × 10⁻⁶", "6.7 × 10⁻⁴", "0.67 × 10⁻⁴"],
                correct: 0,
                difficulty: "medium",
                explanation: "0.000067 = 6.7 × 10⁻⁵ (move decimal point 5 places right)"
            },
            {
                question: "Calculate (9 × 10⁶) + (3 × 10⁶):",
                options: ["12 × 10⁶", "1.2 × 10⁷", "Both A and B", "27 × 10⁶"],
                correct: 2,
                difficulty: "medium",
                explanation: "(9 × 10⁶) + (3 × 10⁶) = 12 × 10⁶ = 1.2 × 10⁷"
            },
            {
                question: "What is 2.5 × 10⁻⁴ in normal form?",
                options: ["0.00025", "0.0025", "0.025", "0.25"],
                correct: 0,
                difficulty: "medium",
                explanation: "2.5 × 10⁻⁴ = 2.5 × 0.0001 = 0.00025"
            },
            {
                question: "Calculate (6 × 10²) × (5 × 10⁻³):",
                options: ["30 × 10⁻¹", "3 × 10⁰", "Both A and B", "11 × 10⁻¹"],
                correct: 2,
                difficulty: "medium",
                explanation: "(6 × 10²) × (5 × 10⁻³) = 30 × 10⁻¹ = 3 × 10⁰ = 3"
            },
            {
                question: "Write 12000000 in standard form:",
                options: ["1.2 × 10⁷", "12 × 10⁶", "1.2 × 10⁶", "120 × 10⁵"],
                correct: 0,
                difficulty: "medium",
                explanation: "12000000 = 1.2 × 10⁷"
            },
            {
                question: "Calculate (4 × 10⁵) ÷ (8 × 10²):",
                options: ["0.5 × 10³", "5 × 10²", "Both A and B", "2 × 10³"],
                correct: 2,
                difficulty: "medium",
                explanation: "(4 × 10⁵) ÷ (8 × 10²) = 0.5 × 10³ = 5 × 10²"
            },
            {
                question: "What is 3.45 × 10⁻² in normal form?",
                options: ["0.345", "0.0345", "0.00345", "3.45"],
                correct: 1,
                difficulty: "medium",
                explanation: "3.45 × 10⁻² = 3.45 × 0.01 = 0.0345"
            },
            {
                question: "Calculate (7 × 10³) - (2 × 10³):",
                options: ["5 × 10³", "5 × 10⁰", "9 × 10³", "14 × 10³"],
                correct: 0,
                difficulty: "medium",
                explanation: "(7 × 10³) - (2 × 10³) = (7 - 2) × 10³ = 5 × 10³"
            },
            
            // HARD QUESTIONS (4)
            {
                question: "Calculate (2.4 × 10⁶) × (3.5 × 10⁻⁴):",
                options: ["8.4 × 10²", "840", "Both A and B", "8.4 × 10¹⁰"],
                correct: 2,
                difficulty: "hard",
                explanation: "(2.4 × 10⁶) × (3.5 × 10⁻⁴) = (2.4 × 3.5) × 10² = 8.4 × 10² = 840"
            },
            {
                question: "Calculate (1.8 × 10⁻³) ÷ (6 × 10⁻⁷):",
                options: ["3 × 10³", "3000", "Both A and B", "0.3 × 10⁴"],
                correct: 2,
                difficulty: "hard",
                explanation: "(1.8 × 10⁻³) ÷ (6 × 10⁻⁷) = (1.8 ÷ 6) × 10⁴ = 0.3 × 10⁴ = 3 × 10³ = 3000"
            },
            {
                question: "Express 0.000000456 in standard form:",
                options: ["4.56 × 10⁻⁷", "45.6 × 10⁻⁸", "4.56 × 10⁻⁶", "456 × 10⁻⁹"],
                correct: 0,
                difficulty: "hard",
                explanation: "0.000000456 = 4.56 × 10⁻⁷ (move decimal point 7 places right)"
            },
            {
                question: "Calculate (5.2 × 10⁸) ÷ (1.3 × 10⁵):",
                options: ["4 × 10³", "4000", "Both A and B", "6.5 × 10³"],
                correct: 2,
                difficulty: "hard",
                explanation: "(5.2 × 10⁸) ÷ (1.3 × 10⁵) = (5.2 ÷ 1.3) × 10³ = 4 × 10³ = 4000"
            }
        ],
        
        significantFigures: [
            // EASY QUESTIONS (10)
            {
                question: "How many significant figures are in 123?",
                options: ["1", "2", "3", "4"],
                correct: 2,
                difficulty: "easy",
                explanation: "All non-zero digits are significant: 1, 2, 3 = 3 significant figures."
            },
            {
                question: "How many significant figures are in 0.045?",
                options: ["1", "2", "3", "4"],
                correct: 1,
                difficulty: "easy",
                explanation: "Leading zeros don't count. Only 4 and 5 are significant = 2 sig figs."
            },
            {
                question: "How many significant figures are in 0.0304?",
                options: ["2", "3", "4", "5"],
                correct: 1,
                difficulty: "medium",
                explanation: "Leading zeros don't count. Only 3, 0, and 4 are significant = 3 sig figs"
            },
            {
                question: "Round 2.376 to 2 significant figures:",
                options: ["2.3", "2.4", "2.37", "2.38"],
                correct: 1,
                difficulty: "medium",
                explanation: "First 2 sig figs are 2.3, but the next digit (7) rounds it up to 2.4"
            },
            {
                question: "How many significant figures are in 5.400?",
                options: ["2", "3", "4", "5"],
                correct: 2,
                difficulty: "medium",
                explanation: "All digits including trailing zeros after decimal point are significant = 4 sig figs"
            },
            {
                question: "Round 456.78 to 3 significant figures:",
                options: ["456", "457", "456.8", "460"],
                correct: 1,
                difficulty: "easy",
                explanation: "First 3 sig figs are 456, but next digit (7) rounds to 457."
            },
            {
                question: "How many significant figures are in 1200?",
                options: ["2", "3", "4", "Ambiguous"],
                correct: 3,
                difficulty: "easy",
                explanation: "Without decimal point, trailing zeros are ambiguous - could be 2, 3, or 4."
            },
            {
                question: "How many significant figures are in 1200.0?",
                options: ["2", "3", "4", "5"],
                correct: 3,
                difficulty: "easy",
                explanation: "The decimal point shows all digits are significant, so 1200.0 has 5 significant figures."
            },
            {
                question: "Round 0.008765 to 2 significant figures:",
                options: ["0.0088", "0.0087", "0.009", "0.01"],
                correct: 0,
                difficulty: "easy",
                explanation: "First 2 sig figs are 8.7, next digit (6) rounds up to 8.8, so 0.0088."
            },
            {
                question: "What is 45.67 to 2 significant figures?",
                options: ["45", "46", "45.7", "50"],
                correct: 1,
                difficulty: "medium",
                explanation: "First 2 sig figs are 4, 5, but next digit (6) rounds up: 46"
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "How many significant figures are in 3.0 × 10⁴?",
                options: ["1", "2", "3", "4"],
                correct: 1,
                difficulty: "medium",
                explanation: "In standard form, all digits shown are significant: 3.0 has 2 sig figs"
            },
            {
                question: "Round 0.0456789 to 3 significant figures:",
                options: ["0.0456", "0.0457", "0.046", "0.05"],
                correct: 1,
                difficulty: "medium",
                explanation: "First 3 sig figs are 4.56, next digit (7) rounds up to 4.57, so 0.0457."
            },
            {
                question: "How many significant figures are in 1.020?",
                options: ["3", "4", "2", "5"],
                correct: 1,
                difficulty: "medium",
                explanation: "All digits including zeros between non-zeros and trailing zeros after decimal are significant = 4."
            },
            {
                question: "Round 789.456 to 4 significant figures:",
                options: ["789.4", "789.5", "789", "790"],
                correct: 1,
                difficulty: "medium",
                explanation: "First 4 sig figs are 789.4, next digit (5) rounds up to 789.5."
            },
            {
                question: "In 0.00500, how many significant figures are there?",
                options: ["2", "3", "5", "6"],
                correct: 1,
                difficulty: "medium",
                explanation: "Leading zeros don't count, but trailing zeros after decimal do: 5, 0, 0 = 3 sig figs."
            },
            {
                question: "Round 0.999 to 1 significant figure:",
                options: ["1", "0.9", "1.0", "10"],
                correct: 0,
                difficulty: "medium",
                explanation: "First sig fig is 9, next digit (9) rounds up, carrying over to give 1."
            },
            {
                question: "How many significant figures should the answer have: 12.34 × 5.6?",
                options: ["2", "3", "4", "5"],
                correct: 0,
                difficulty: "medium",
                explanation: "In multiplication, answer has same sig figs as least precise number: 5.6 has 2 sig figs."
            },
            {
                question: "Calculate 23.45 + 1.2 with correct significant figures:",
                options: ["24.65", "24.7", "25", "24"],
                correct: 1,
                difficulty: "medium",
                explanation: "In addition, answer limited by least decimal places: 1.2 has 1 decimal place, so 24.7."
            },
            {
                question: "Round 5.555 to 2 significant figures:",
                options: ["5.5", "5.6", "6.0", "5.55"],
                correct: 1,
                difficulty: "medium",
                explanation: "First 2 sig figs are 5.5, next digit (5) rounds up to 5.6."
            },
            {
                question: "How many significant figures are in 0.0780?",
                options: ["2", "3", "4", "5"],
                correct: 1,
                difficulty: "medium",
                explanation: "Leading zeros don't count: 7, 8, 0 (trailing zero after decimal) = 3 sig figs."
            },
            {
                question: "Express 456,000 unambiguously with 3 significant figures:",
                options: ["456,000", "4.56 × 10⁵", "456 × 10³", "456000"],
                correct: 1,
                difficulty: "medium",
                explanation: "Standard form clearly shows number of significant figures: 4.56 × 10⁵."
            },
            
            // HARD QUESTIONS (4)
            {
                question: "Calculate (12.3 × 4.56) ÷ 7.89 with correct significant figures:",
                options: ["7.11", "7.1", "7", "7.108"],
                correct: 1,
                difficulty: "hard",
                explanation: "All numbers have 3 sig figs, so answer should have 3 sig figs: 7.11 rounds to 7.1 (2 decimal places from division rules)."
            },
            {
                question: "In scientific calculations, why are significant figures important?",
                options: ["They make calculations easier", "They indicate precision and reliability of measurements", "They're just convention", "They save time"],
                correct: 1,
                difficulty: "hard",
                explanation: "Significant figures indicate the precision and reliability of measurements and prevent false precision in calculations."
            },
            {
                question: "Calculate 123.456 - 12.3 with correct significant figures:",
                options: ["111.156", "111.2", "111", "110"],
                correct: 1,
                difficulty: "hard",
                explanation: "In subtraction, limited by least decimal places: 12.3 has 1 decimal place, so 111.2."
            },
            {
                question: "What's the result of (2.0 × 10³) × (3.00 × 10²) with correct sig figs?",
                options: ["6.0 × 10⁵", "6.00 × 10⁵", "6 × 10⁵", "600000"],
                correct: 0,
                difficulty: "hard",
                explanation: "2.0 has 2 sig figs (limiting factor), so answer is 6.0 × 10⁵."
            }
        ],
        
        graphSkills: [
            // EASY QUESTIONS (10)
            {
                question: "What goes on the x-axis of a graph?",
                options: ["Dependent variable", "Independent variable", "Constant", "Units"],
                correct: 1,
                difficulty: "easy",
                explanation: "The independent variable (what you control/change) goes on the x-axis"
            },
            {
                question: "What goes on the y-axis of a graph?",
                options: ["Independent variable", "Dependent variable", "Constant", "Title"],
                correct: 1,
                difficulty: "easy",
                explanation: "The dependent variable (what you measure) goes on the y-axis"
            },
            {
                question: "What does the slope of a distance-time graph represent?",
                options: ["Distance", "Time", "Speed", "Acceleration"],
                correct: 2,
                difficulty: "medium",
                explanation: "Slope = rise/run = distance/time = speed"
            },
            {
                question: "What does a horizontal line on a distance-time graph show?",
                options: ["Constant speed", "Stationary (not moving)", "Acceleration", "Deceleration"],
                correct: 1,
                difficulty: "easy",
                explanation: "Horizontal line means distance isn't changing, so object is stationary."
            },
            {
                question: "What does a straight sloped line on a distance-time graph show?",
                options: ["Acceleration", "Constant speed", "Stationary", "Changing acceleration"],
                correct: 1,
                difficulty: "easy",
                explanation: "Straight sloped line means distance changes at constant rate = constant speed."
            },
            {
                question: "What should you do when plotting points on a graph?",
                options: ["Use tiny dots", "Use crosses or circles", "Use stars", "Use squares"],
                correct: 1,
                difficulty: "easy",
                explanation: "Use clear crosses (×) or circles (○) to mark points accurately."
            },
            {
                question: "What is interpolation?",
                options: ["Reading values between plotted points", "Reading values outside data range", "Drawing the line", "Calculating gradient"],
                correct: 0,
                difficulty: "easy",
                explanation: "Interpolation is reading values between known data points."
            },
            {
                question: "What is extrapolation?",
                options: ["Reading values between plotted points", "Reading values outside data range", "Drawing the line", "Calculating gradient"],
                correct: 1,
                difficulty: "easy",
                explanation: "Extrapolation is predicting values outside the measured data range."
            },
            {
                question: "When should you draw a line of best fit?",
                options: ["Always", "When points show a clear pattern", "Never", "Only for straight lines"],
                correct: 1,
                difficulty: "easy",
                explanation: "Draw a line of best fit when data points show a clear trend or pattern."
            },
            {
                question: "What does a steep slope indicate?",
                options: ["Large change in y for small change in x", "Small change in y for large change in x", "No change", "Negative relationship"],
                correct: 0,
                difficulty: "easy",
                explanation: "Steep slope means large change in y-variable for small change in x-variable."
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "How do you calculate gradient between two points?",
                options: ["(y₂ + y₁)/(x₂ + x₁)", "(y₂ - y₁)/(x₂ - x₁)", "(x₂ - x₁)/(y₂ - y₁)", "y₂ - y₁"],
                correct: 1,
                difficulty: "medium",
                explanation: "Gradient = change in y / change in x = (y₂ - y₁)/(x₂ - x₁)"
            },
            {
                question: "What does a straight line through the origin indicate?",
                options: ["No relationship", "Direct proportion", "Inverse proportion", "Constant value"],
                correct: 1,
                difficulty: "medium",
                explanation: "A straight line through origin shows direct proportionality: y ∝ x"
            },
            {
                question: "What does it mean when two variables are directly proportional?",
                options: ["y = x + k", "y = kx", "y = k/x", "y = k - x"],
                correct: 1,
                difficulty: "medium",
                explanation: "Direct proportion means y = kx, where k is a constant"
            },
            {
                question: "What does it mean when two variables are inversely proportional?",
                options: ["y = kx", "y = k/x", "y = x + k", "y = k - x"],
                correct: 1,
                difficulty: "medium",
                explanation: "Inverse proportion means y = k/x, where k is a constant"
            },
            {
                question: "What does the area under a speed-time graph represent?",
                options: ["Speed", "Time", "Distance traveled", "Acceleration"],
                correct: 2,
                difficulty: "medium",
                explanation: "Area under speed-time graph = speed × time = distance traveled"
            },
            {
                question: "What does the slope of a speed-time graph represent?",
                options: ["Speed", "Distance", "Acceleration", "Time"],
                correct: 2,
                difficulty: "medium",
                explanation: "Slope of speed-time graph = change in speed / time = acceleration"
            },
            {
                question: "What type of relationship does a curved line show?",
                options: ["Linear", "No relationship", "Non-linear", "Inverse"],
                correct: 2,
                difficulty: "medium",
                explanation: "Curved lines indicate non-linear relationships between variables."
            },
            {
                question: "How do you find the y-intercept of a straight line graph?",
                options: ["Where line crosses x-axis", "Where line crosses y-axis", "Highest point", "Steepest point"],
                correct: 1,
                difficulty: "medium",
                explanation: "Y-intercept is where the line crosses the y-axis (when x = 0)."
            },
            {
                question: "What does a negative gradient mean?",
                options: ["y increases as x increases", "y decreases as x increases", "No relationship", "y stays constant"],
                correct: 1,
                difficulty: "medium",
                explanation: "Negative gradient means as x increases, y decreases."
            },
            {
                question: "What is the equation of a straight line?",
                options: ["y = mx + c", "y = x + m", "y = mx - c", "y = cx + m"],
                correct: 0,
                difficulty: "medium",
                explanation: "Standard form is y = mx + c, where m is gradient and c is y-intercept."
            },
            {
                question: "What does it mean if r² = 0.95 for a line of best fit?",
                options: ["Poor fit", "Good fit", "Perfect fit", "No correlation"],
                correct: 1,
                difficulty: "medium",
                explanation: "r² = 0.95 means 95% of variation is explained by the relationship - a good fit."
            },
            
            // HARD QUESTIONS (4)
            {
                question: "Calculate the gradient of line passing through (2,5) and (8,17):",
                options: ["2", "3", "1.5", "6"],
                correct: 0,
                difficulty: "hard",
                explanation: "Gradient = (17-5)/(8-2) = 12/6 = 2"
            },
            {
                question: "A line has equation y = 3x - 2. What is its gradient and y-intercept?",
                options: ["Gradient = 3, y-intercept = 2", "Gradient = -2, y-intercept = 3", "Gradient = 3, y-intercept = -2", "Gradient = -3, y-intercept = 2"],
                correct: 2,
                difficulty: "hard",
                explanation: "In y = mx + c form: gradient (m) = 3, y-intercept (c) = -2"
            },
            {
                question: "What is the equation of a line with gradient 2 passing through (1,5)?",
                options: ["y = 2x + 3", "y = 2x + 5", "y = 2x + 1", "y = 2x - 3"],
                correct: 0,
                difficulty: "hard",
                explanation: "Using y = mx + c: 5 = 2(1) + c, so c = 3. Equation is y = 2x + 3"
            },
            {
                question: "How do you linearize the relationship y = ax²?",
                options: ["Plot y vs x", "Plot y vs x²", "Plot y² vs x", "Plot √y vs x"],
                correct: 1,
                difficulty: "hard",
                explanation: "To linearize y = ax², plot y against x². This gives straight line with gradient a."
            }
        ],
        
        percentages: [
            // EASY QUESTIONS (10)
            {
                question: "What is 25% of 80?",
                options: ["15", "20", "25", "30"],
                correct: 1,
                difficulty: "easy",
                explanation: "25% = 25/100 = 0.25, so 25% of 80 = 0.25 × 80 = 20"
            },
            {
                question: "What is 50% of 120?",
                options: ["50", "60", "70", "80"],
                correct: 1,
                difficulty: "easy",
                explanation: "50% = 0.5, so 50% of 120 = 0.5 × 120 = 60"
            },
            {
                question: "What is 10% of 250?",
                options: ["25", "30", "35", "40"],
                correct: 0,
                difficulty: "easy",
                explanation: "10% = 0.1, so 10% of 250 = 0.1 × 250 = 25"
            },
            {
                question: "Convert 0.75 to a percentage:",
                options: ["7.5%", "75%", "750%", "0.75%"],
                correct: 1,
                difficulty: "easy",
                explanation: "0.75 = 75/100 = 75%"
            },
            {
                question: "Convert 3/4 to a percentage:",
                options: ["34%", "43%", "75%", "25%"],
                correct: 2,
                difficulty: "easy",
                explanation: "3/4 = 0.75 = 75%"
            },
            {
                question: "What is 20% of 60?",
                options: ["10", "12", "15", "20"],
                correct: 1,
                difficulty: "easy",
                explanation: "20% = 0.2, so 20% of 60 = 0.2 × 60 = 12"
            },
            {
                question: "What percentage is 30 out of 100?",
                options: ["3%", "30%", "300%", "0.3%"],
                correct: 1,
                difficulty: "easy",
                explanation: "30 out of 100 = 30/100 = 30%"
            },
            {
                question: "What is 1% of 500?",
                options: ["5", "50", "0.5", "15"],
                correct: 0,
                difficulty: "easy",
                explanation: "1% = 0.01, so 1% of 500 = 0.01 × 500 = 5"
            },
            {
                question: "What is 100% of any number?",
                options: ["Zero", "One", "The number itself", "Infinity"],
                correct: 2,
                difficulty: "easy",
                explanation: "100% means the whole amount, so 100% of any number is the number itself."
            },
            {
                question: "Convert 0.4 to a percentage:",
                options: ["4%", "40%", "400%", "0.4%"],
                correct: 1,
                difficulty: "easy",
                explanation: "0.4 = 40/100 = 40%"
            },
            
            // MEDIUM QUESTIONS (11)
            {
                question: "If 15 out of 60 students passed, what percentage passed?",
                options: ["15%", "20%", "25%", "30%"],
                correct: 2,
                difficulty: "medium",
                explanation: "Percentage = (15/60) × 100% = 0.25 × 100% = 25%"
            },
            {
                question: "What is the percentage increase from 20 to 25?",
                options: ["5%", "20%", "25%", "125%"],
                correct: 2,
                difficulty: "medium",
                explanation: "Increase = 25 - 20 = 5. Percentage increase = (5/20) × 100% = 25%"
            },
            {
                question: "What is 12% of 250?",
                options: ["24", "30", "36", "3"],
                correct: 1,
                difficulty: "easy",
                explanation: "12% = 0.12, so 12% of 250 = 0.12 × 250 = 30"
            },
            {
                question: "What percentage is 45 out of 180?",
                options: ["20%", "25%", "30%", "4%"],
                correct: 1,
                difficulty: "medium",
                explanation: "Percentage = (45/180) × 100% = 0.25 × 100% = 25%"
            },
            {
                question: "A shirt costs £40. In a sale it's reduced by 15%. What's the sale price?",
                options: ["£34", "£35", "£36", "£25"],
                correct: 0,
                difficulty: "medium",
                explanation: "15% of £40 = £6. Sale price = £40 - £6 = £34"
            },
            {
                question: "What is the percentage decrease from 80 to 60?",
                options: ["20%", "25%", "30%", "75%"],
                correct: 1,
                difficulty: "medium",
                explanation: "Decrease = 80 - 60 = 20. Percentage decrease = (20/80) × 100% = 25%"
            },
            {
                question: "If a value increases by 10% and then by 10% again, what's the total increase?",
                options: ["20%", "21%", "22%", "11%"],
                correct: 1,
                difficulty: "medium",
                explanation: "After first 10%: 110%. After second 10%: 110% × 1.1 = 121%. Total increase = 21%"
            },
            {
                question: "What is 37.5% as a fraction in lowest terms?",
                options: ["37/100", "3/8", "375/1000", "75/200"],
                correct: 1,
                difficulty: "medium",
                explanation: "37.5% = 37.5/100 = 375/1000 = 3/8"
            },
            {
                question: "If 40% of a number is 60, what is the number?",
                options: ["24", "100", "150", "240"],
                correct: 2,
                difficulty: "medium",
                explanation: "If 40% of x = 60, then 0.4x = 60, so x = 60/0.4 = 150"
            },
            {
                question: "What is 5% of 5% of 400?",
                options: ["1", "20", "100", "40"],
                correct: 0,
                difficulty: "medium",
                explanation: "5% of 400 = 20. Then 5% of 20 = 1"
            },
            {
                question: "A population of 1000 increases by 5% each year. What's the population after 2 years?",
                options: ["1100", "1102.5", "1050", "1025"],
                correct: 1,
                difficulty: "medium",
                explanation: "After 1 year: 1000 × 1.05 = 1050. After 2 years: 1050 × 1.05 = 1102.5"
            },
            
            // HARD QUESTIONS (4)
            {
                question: "A price increases by 25% then decreases by 20%. What's the overall percentage change?",
                options: ["5% increase", "0% change", "5% decrease", "45% increase"],
                correct: 1,
                difficulty: "hard",
                explanation: "After 25% increase: 125%. After 20% decrease: 125% × 0.8 = 100%. No overall change."
            },
            {
                question: "If VAT at 20% is added to a price of £80, what's the total including VAT?",
                options: ["£96", "£100", "£88", "£160"],
                correct: 0,
                difficulty: "hard",
                explanation: "VAT = 20% of £80 = £16. Total = £80 + £16 = £96"
            },
            {
                question: "What percentage of 250 is 37.5?",
                options: ["12%", "15%", "18%", "20%"],
                correct: 1,
                difficulty: "hard",
                explanation: "Percentage = (37.5/250) × 100% = 0.15 × 100% = 15%"
            },
            {
                question: "If an investment of £1000 grows to £1331 in 3 years with compound interest, what's the annual interest rate?",
                options: ["10%", "11%", "12%", "33.1%"],
                correct: 0,
                difficulty: "hard",
                explanation: "1000 × (1 + r)³ = 1331, so (1 + r)³ = 1.331 = 1.1³, therefore r = 0.1 = 10%"
            }
        ]
    }
};

// Debug: Log successful loading
console.log("✅ questions.js loaded successfully!");
console.log("✅ Question bank contains", Object.keys(questionBank).length, "subjects");

// Count total questions for verification
let totalQuestions = 0;
Object.keys(questionBank).forEach(subject => {
    Object.keys(questionBank[subject]).forEach(topic => {
        totalQuestions += questionBank[subject][topic].length;
    });
});
console.log("✅ Total questions loaded:", totalQuestions);