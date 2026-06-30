// Sound Effects Manager for Science Wizards RPG
class SoundManager {
    constructor() {
        this.audioContext = null;
        this.isInitialized = false;
        this.isMuted = false;
        this.sounds = {};
    }

    // Initialize audio context (must be called after user interaction)
    async init() {
        if (this.isInitialized) return;
        
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // Resume audio context if suspended (browser autoplay policy)
            if (this.audioContext.state === 'suspended') {
                await this.audioContext.resume();
            }
            
            this.isInitialized = true;
            console.log('🔊 Sound system initialized successfully');
            
            // Add sound toggle info to game log
            if (typeof addLog === 'function') {
                addLog('🔊 Sound effects enabled! Click 🔇 to toggle mute.');
            }
            
        } catch (error) {
            console.error('❌ Error initializing sound system:', error);
        }
    }

    // Create and play a sound effect
    playSound(type, frequency = 600, duration = 0.1, waveType = 'square') {
        if (!this.isInitialized || this.isMuted || !this.audioContext) return;

        try {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.type = waveType;
            oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
            
            // Set volume envelope
            gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.1, this.audioContext.currentTime + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + duration);
            
        } catch (error) {
            console.error('Error playing sound:', error);
        }
    }

    // Specific sound effects
    playButtonClick() {
        this.playSound('click', 600, 0.1, 'square');
    }

    playHover() {
        this.playSound('hover', 400, 0.05, 'sine');
    }

    playSuccess() {
        // Ascending tone for success
        this.playSound('success1', 523, 0.1, 'sine'); // C
        setTimeout(() => this.playSound('success2', 659, 0.1, 'sine'), 100); // E
        setTimeout(() => this.playSound('success3', 784, 0.15, 'sine'), 200); // G
    }

    playError() {
        // Descending tone for error
        this.playSound('error', 200, 0.3, 'sawtooth');
    }

    playBattleStart() {
        // Epic battle start sound
        this.playSound('battle1', 150, 0.2, 'square');
        setTimeout(() => this.playSound('battle2', 200, 0.2, 'square'), 150);
        setTimeout(() => this.playSound('battle3', 300, 0.3, 'square'), 300);
    }

    playVictory() {
        // Victory fanfare
        const notes = [523, 659, 784, 1047]; // C, E, G, C
        notes.forEach((note, index) => {
            setTimeout(() => this.playSound('victory', note, 0.2, 'sine'), index * 100);
        });
    }

    playLevelUp() {
        // Rising scale for level up
        const notes = [261, 293, 329, 349, 392, 440, 493, 523]; // C major scale
        notes.forEach((note, index) => {
            setTimeout(() => this.playSound('levelup', note, 0.1, 'sine'), index * 50);
        });
    }

    playCosmicDiscovery() {
        // Mysterious cosmic sound
        this.playSound('cosmic1', 100, 0.5, 'sine');
        setTimeout(() => this.playSound('cosmic2', 150, 0.4, 'triangle'), 200);
        setTimeout(() => this.playSound('cosmic3', 200, 0.3, 'sine'), 400);
    }

    // Toggle mute
    toggleMute() {
        this.isMuted = !this.isMuted;
        const status = this.isMuted ? 'muted' : 'unmuted';
        console.log(`🔊 Sound effects ${status}`);
        
        if (typeof addLog === 'function') {
            addLog(`🔊 Sound effects ${status}`);
        }
        
        // Update mute button if it exists
        const muteBtn = document.getElementById('muteButton');
        if (muteBtn) {
            muteBtn.textContent = this.isMuted ? '🔇' : '🔊';
            muteBtn.title = this.isMuted ? 'Unmute sounds' : 'Mute sounds';
        }
        
        return this.isMuted;
    }

    // Add event listeners to all buttons (including dynamically created ones)
    addSoundToElement(element, soundType = 'click') {
        if (!element) return;
        
        // Remove existing listeners to prevent duplicates
        element.removeEventListener('click', this.handleClick);
        element.removeEventListener('mouseenter', this.handleHover);
        
        // Add click sound
        this.handleClick = (e) => {
            if (soundType === 'click') this.playButtonClick();
            else if (soundType === 'success') this.playSuccess();
            else if (soundType === 'error') this.playError();
        };
        element.addEventListener('click', this.handleClick);
        
        // Add hover sound for buttons
        if (element.tagName === 'BUTTON') {
            this.handleHover = () => this.playHover();
            element.addEventListener('mouseenter', this.handleHover);
        }
    }

    // Initialize sounds for all existing elements
    initializeAllElements() {
        // Add sounds to all existing buttons
        document.querySelectorAll('button').forEach(button => {
            this.addSoundToElement(button, 'click');
        });

        // Add sounds to clickable game elements
        document.querySelectorAll('.team-member, .npc-card, .area-button, .topic-checkbox').forEach(element => {
            this.addSoundToElement(element, 'click');
        });
    }
}

// Create global sound manager instance
const soundManager = new SoundManager();

// Auto-initialize on first user interaction
let soundInitialized = false;
function initSoundOnInteraction() {
    if (!soundInitialized) {
        soundManager.init();
        soundInitialized = true;
        // Remove the one-time listeners
        document.removeEventListener('click', initSoundOnInteraction);
        document.removeEventListener('keydown', initSoundOnInteraction);
        
        // Initialize sounds for all elements
        setTimeout(() => soundManager.initializeAllElements(), 100);
    }
}

// Add one-time listeners for initialization
document.addEventListener('click', initSoundOnInteraction);
document.addEventListener('keydown', initSoundOnInteraction);

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔧 Sound system ready - waiting for user interaction to initialize...');
    
    // Add mute button to the game header
    setTimeout(() => {
        const gameHeader = document.querySelector('.game-header');
        if (gameHeader) {
            const muteButton = document.createElement('button');
            muteButton.id = 'muteButton';
            muteButton.className = 'settings-btn';
            muteButton.textContent = '🔊';
            muteButton.title = 'Toggle sound effects';
            muteButton.onclick = () => soundManager.toggleMute();
            gameHeader.appendChild(muteButton);
        }
    }, 1000);
});

// Export for use in main game
if (typeof window !== 'undefined') {
    window.soundManager = soundManager;
}
