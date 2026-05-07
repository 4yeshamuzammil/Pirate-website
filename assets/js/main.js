/*==================== MAGIC BUTTON ====================*/

// 1. Your Pirate Messages (The "Bounty" list)
const bountyData = [
    { 
        msg: "<span class='big-emoji'>💰</span> Arrr! You found 100 Gold Doubloons!", 
        rank: "Dread Pirate" 
    },
        {
       msg: "<span class='big-emoji'>🏴‍☠️</span> PIRATE FLAG! You are a member of the Straw Hats now!", 
       rank: "Straw Hat" 
    },
    { 
        msg: "<span class='big-emoji'>👑</span> **THE ONE PIECE!** You are now the King of the Seas!", 
        rank: "Pirate King" 
    },
    { 
        msg: "<span class='big-emoji'>🗡️</span> A fallen sword from a foe. No pirate is safe now!", 
        rank: "Pirate Hunter" 
    },
    { 
        msg: "<span class='big-emoji'>👞</span> Ugh... just a soggy old boot.", 
        rank: "D-Monkey" 
    },
    { 
        msg: "<span class='big-emoji'>🍾</span> A Message in a bottle... it says 'Help!'", 
        rank: "Black Leg" 
    },
    { 
        msg: "<span class='big-emoji'>📜</span> Look at that! A Legendary Treasure Map!", 
        rank: "Hawk Eyes" 
    }

];

// 2. Variables to track the state
let currentMessageIndex = 0;

// 3. Get all the HTML elements
const modal = document.getElementById('bountyModal');
const openBtn = document.querySelector('.treasure-btn');
const closeBtn = document.getElementById('closeBtn');

// SELECTING THE TEXT AND THE RANK
const modalText = document.querySelector('.modal-text');
const rankSpan = document.querySelector('.pirate-rank span'); 

// --- THE OPEN FUNCTION ---
openBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevents page jump

    // Pull the specific object (Message + Rank) from the array
    const currentBounty = bountyData[currentMessageIndex];

    // UPDATE THE UI (Both message and rank)
    modalText.innerHTML = currentBounty.msg;
    rankSpan.innerHTML = currentBounty.rank;

    // Move to the next message for the next time they click
    currentMessageIndex++;

    // If we reach the end of the 7 messages, go back to the start
    if (currentMessageIndex >= bountyData.length) {
        currentMessageIndex = 0; 
        console.log("Treasure chest refilled!"); 
    }

    // Show the modal
    modal.style.display = 'grid';
});

// --- THE CLOSE FUNCTION ---
const closeModal = () => {
    modal.style.display = 'none';
};

// Close when clicking the 'X' button
closeBtn.addEventListener('click', closeModal);

// Close if they click the dark area outside the parchment
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close if they press the 'Escape' key
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        closeModal();
    }
});

// shadow header


const shadowHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('shadow-header')
                     : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


//mobile pop up
document.addEventListener('DOMContentLoaded', () => {
    const giftBtn = document.getElementById('gift-icon');
    const bountyModal = document.getElementById('bountyModal');
    const closeBtn = document.getElementById('closeBtn');

    if (giftBtn) {
        giftBtn.addEventListener('click', () => {
            console.log("Gift clicked!");
            bountyModal.style.display = 'flex'; 
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            bountyModal.style.display = 'none';
        });
    }
});
